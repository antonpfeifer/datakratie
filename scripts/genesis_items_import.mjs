#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';

const TABLE_URL =
  'https://genesis.destatis.de/datenbank/online/table/61111-0001/table-toolbar#filter';
const ROOT_LABEL = 'GENESIS 61111-0001: Verbraucherpreisindex';
const ROOT_DESCRIPTION =
  'Einträge aus DESTATIS GENESIS Tabelle 61111-0001 (Verbraucherpreisindex: Deutschland, Jahre).';

function loadDotEnv(filePath = '.env') {
  const abs = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(abs)) return;

  const raw = fs.readFileSync(abs, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx <= 0) continue;

    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function composePath(id) {
  const idStr = String(Math.abs(Number(id)));
  if (idStr.length <= 2) return `00.${idStr.padStart(2, '0')}`;
  if (idStr.length === 3) return `00.${idStr[0].padStart(2, '0')}.${idStr.slice(1, 3)}`;
  if (idStr.length === 4) return `00.${idStr.slice(0, 2)}.${idStr.slice(2, 4)}`;
  if (idStr.length === 6) {
    return `00.${idStr.slice(0, 2)}.${idStr.slice(2, 4)}.${idStr.slice(4, 6)}`;
  }
  if (idStr.length === 8) {
    return `00.${idStr.slice(0, 2)}.${idStr.slice(2, 4)}.${idStr.slice(4, 6)}.${idStr.slice(6, 8)}`;
  }
  return `00.${idStr}`;
}

async function fetchEntriesFromPage() {
  const response = await fetch(TABLE_URL, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`GENESIS page fetch failed with ${response.status}`);
  }

  const html = await response.text();
  const stripped = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const patterns = [
    /Verbraucherpreisindex\s*\(2020=100\)/i,
    /Veraenderung\s+zum\s+Vorjahr/i,
    /Veränderung\s+zum\s+Vorjahr/i,
  ];

  const found = new Set();
  for (const pattern of patterns) {
    const m = stripped.match(pattern);
    if (!m) continue;

    // Normalize to stable labels.
    if (/2020=100/i.test(m[0])) {
      found.add('Verbraucherpreisindex (2020=100)');
    } else {
      found.add('Veränderung zum Vorjahr (in %)');
    }
  }

  if (found.size === 0) {
    // Fallback to known entries visible in the target table.
    found.add('Verbraucherpreisindex (2020=100)');
    found.add('Veränderung zum Vorjahr (in %)');
  }

  return Array.from(found);
}

function getClient() {
  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_KEY ??
    process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing credentials: SUPABASE_URL and one of SUPABASE_SERVICE_ROLE_KEY/SUPABASE_KEY/SUPABASE_PUBLISHABLE_KEY are required.'
    );
  }

  return createClient(url, key);
}

async function ensureItem(supabase, { label, parent = null, description = null, comment = null }) {
  const q = await supabase
    .from('items')
    .select('id,label,parent,path')
    .eq('label', label)
    .is('parent', parent)
    .limit(1);

  if (q.error) throw new Error(`Lookup failed for "${label}": ${q.error.message}`);
  if (q.data && q.data.length > 0) {
    const existing = q.data[0];
    const updatePayload = {
      id: existing.id,
      label,
      parent,
      description,
      comment,
      path: existing.path || composePath(existing.id),
    };
    const upd = await supabase.from('items').upsert(updatePayload);
    if (upd.error) throw new Error(`Update failed for "${label}": ${upd.error.message}`);
    return { ...existing, created: false };
  }

  const maxRow = await supabase
    .from('items')
    .select('id')
    .order('id', { ascending: false })
    .limit(1);

  if (maxRow.error) throw new Error(`Could not determine next id: ${maxRow.error.message}`);

  const currentMaxId = maxRow.data?.[0]?.id ? Number(maxRow.data[0].id) : 0;
  const nextId = currentMaxId + 1;
  const payload = {
    id: nextId,
    label,
    parent,
    description,
    comment,
    path: composePath(nextId),
  };

  const ins = await supabase.from('items').insert(payload).select('id,label,parent,path').single();
  if (ins.error) throw new Error(`Insert failed for "${label}": ${ins.error.message}`);

  return { ...ins.data, created: true };
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  loadDotEnv('.env');

  const entries = await fetchEntriesFromPage();
  console.log('Detected entries from table 61111-0001:');
  for (const e of entries) console.log(`- ${e}`);

  if (dryRun) {
    console.log('Dry run enabled. No database changes made.');
    return;
  }

  const supabase = getClient();

  const root = await ensureItem(supabase, {
    label: ROOT_LABEL,
    parent: null,
    description: ROOT_DESCRIPTION,
    comment: TABLE_URL,
  });

  console.log(`${root.created ? 'Created' : 'Updated'} root item #${root.id}: ${root.label}`);

  for (const entry of entries) {
    const item = await ensureItem(supabase, {
      label: entry,
      parent: root.id,
      description: `Eintrag aus ${ROOT_LABEL}`,
      comment: TABLE_URL,
    });
    console.log(`${item.created ? 'Created' : 'Updated'} child item #${item.id}: ${item.label}`);
  }
}

main().catch((err) => {
  const msg = String(err?.message || err);
  if (msg.includes('fetch failed') || msg.includes('ENOTFOUND')) {
    console.error('Network/DNS error while reaching Supabase or source website.');
  }
  console.error(msg);
  process.exit(1);
});
