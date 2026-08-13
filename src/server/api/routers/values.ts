import { Prisma } from "generated/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

type HistoryValueRow = {
  date: Date | string | number;
  recursive_should_sum: bigint | number | null;
};

type ModifiedHistoryValueRow = {
  date: Date | string | number;
  value: number | bigint | null;
};

export const valuesRouter = createTRPCRouter({
  byItemAtDate: publicProcedure
    .input(z.object({ item: z.number().int().nonnegative(), date: z.date() }))
    .query(async ({ ctx, input }) => {
      const result = await ctx.db.values.aggregate({
        where: {
          date: input.date,
          titles: {
            item: input.item,
          },
        },
        _sum: {
          should: true,
        },
      });

      return Number(result._sum.should ?? 0n);
    }),

  byTitles: publicProcedure
    .input(z.object({ titles: z.array(z.number()) }))
    .query(async ({ ctx, input }) => {
      const results = await ctx.db.values.groupBy({
        by: ["date"],
        where: {
          title: {
            in: input.titles,
          },
        },
        _sum: {
          should: true,
        },
      });

      return results.map((res) => ({
        date: res.date,
        value: res._sum.should,
      }));
    }),

  byItemAndModifiers: publicProcedure
    .input(
      z.object({
        item: z.number().int().nonnegative(),
        modifiers: z.array(z.number()),
      }),
    )
    .query(async ({ ctx, input }) => {
      const modifierIds = [...new Set(input.modifiers.map((id) => Number(id)).filter((id) => Number.isFinite(id) && id > 0))];

      const baseResult = await ctx.db.$queryRaw<HistoryValueRow[]>(Prisma.sql`
        WITH RECURSIVE direct_children AS (
          SELECT i.id
          FROM items i
          WHERE i.parent = ${input.item}
        ),

        child_tree AS (
          SELECT i.id AS node_id, i.id AS direct_child_id
          FROM items i
          WHERE i.parent = ${input.item}

          UNION ALL

          SELECT c.id AS node_id, t.direct_child_id
          FROM items c
          JOIN child_tree t ON c.parent = t.node_id
        ),

        child_sum_by_date AS (
          SELECT
            v.date,
            t.direct_child_id,
            COALESCE(SUM(v.should), 0) AS recursive_should_sum
          FROM child_tree t
          LEFT JOIN titles ti ON ti.item = t.node_id
          LEFT JOIN "values" v ON v.title = ti.id
          WHERE v.date IS NOT NULL
          GROUP BY v.date, t.direct_child_id
        ),

        child_total_by_date AS (
          SELECT
            s.date,
            SUM(ABS(s.recursive_should_sum)) AS value
          FROM child_sum_by_date s
          GROUP BY s.date
        ),

        own_total_by_date AS (
          SELECT
            v.date,
            ABS(COALESCE(SUM(v.should), 0)) AS value
          FROM titles ti
          LEFT JOIN "values" v ON v.title = ti.id
          WHERE ti.item = ${input.item} AND v.date IS NOT NULL
          GROUP BY v.date
        ),

        dates AS (
          SELECT date FROM child_total_by_date
          UNION
          SELECT date FROM own_total_by_date
        )

        SELECT
          d.date,
          CASE
            WHEN EXISTS (SELECT 1 FROM direct_children)
            THEN COALESCE(c.value, 0)
            ELSE COALESCE(o.value, 0)
          END AS recursive_should_sum
        FROM dates d
        LEFT JOIN child_total_by_date c ON c.date = d.date
        LEFT JOIN own_total_by_date o ON o.date = d.date
        ORDER BY d.date;
      `);

      if (modifierIds.length === 0) {
        return baseResult.map((row) => ({
          date: new Date(row.date),
          value: Number(row.recursive_should_sum ?? 0n),
        }));
      }

      const selectedModifierId = modifierIds[0]!;

      const modifiedResult = await ctx.db.$queryRaw<ModifiedHistoryValueRow[]>(Prisma.sql`
        WITH RECURSIVE base_values AS (
          SELECT
            x.date,
            x.recursive_should_sum::numeric AS base_value
          FROM (
            WITH RECURSIVE direct_children AS (
              SELECT i.id
              FROM items i
              WHERE i.parent = ${input.item}
            ),

            child_tree AS (
              SELECT i.id AS node_id, i.id AS direct_child_id
              FROM items i
              WHERE i.parent = ${input.item}

              UNION ALL

              SELECT c.id AS node_id, t.direct_child_id
              FROM items c
              JOIN child_tree t ON c.parent = t.node_id
            ),

            child_sum_by_date AS (
              SELECT
                v.date,
                t.direct_child_id,
                COALESCE(SUM(v.should), 0) AS recursive_should_sum
              FROM child_tree t
              LEFT JOIN titles ti ON ti.item = t.node_id
              LEFT JOIN "values" v ON v.title = ti.id
              WHERE v.date IS NOT NULL
              GROUP BY v.date, t.direct_child_id
            ),

            child_total_by_date AS (
              SELECT
                s.date,
                SUM(ABS(s.recursive_should_sum)) AS value
              FROM child_sum_by_date s
              GROUP BY s.date
            ),

            own_total_by_date AS (
              SELECT
                v.date,
                ABS(COALESCE(SUM(v.should), 0)) AS value
              FROM titles ti
              LEFT JOIN "values" v ON v.title = ti.id
              WHERE ti.item = ${input.item} AND v.date IS NOT NULL
              GROUP BY v.date
            ),

            dates AS (
              SELECT date FROM child_total_by_date
              UNION
              SELECT date FROM own_total_by_date
            )

            SELECT
              d.date,
              CASE
                WHEN EXISTS (SELECT 1 FROM direct_children)
                THEN COALESCE(c.value, 0)
                ELSE COALESCE(o.value, 0)
              END AS recursive_should_sum
            FROM dates d
            LEFT JOIN child_total_by_date c ON c.date = d.date
            LEFT JOIN own_total_by_date o ON o.date = d.date
          ) x
        ),

        selected_modifier_item AS (
          SELECT
            i.id,
            COALESCE(i.label, '') AS label
          FROM items i
          WHERE i.id = ${selectedModifierId}
          LIMIT 1
        ),

        modifier_direct_children AS (
          SELECT i.id
          FROM items i
          WHERE i.parent = ${selectedModifierId}
        ),

        modifier_tree AS (
          SELECT i.id AS node_id, i.id AS direct_child_id
          FROM items i
          WHERE i.parent = ${selectedModifierId}

          UNION ALL

          SELECT c.id AS node_id, t.direct_child_id
          FROM items c
          JOIN modifier_tree t ON c.parent = t.node_id
        ),

        modifier_child_sum_by_date AS (
          SELECT
            v.date,
            t.direct_child_id,
            COALESCE(SUM(v.should), 0) AS recursive_should_sum
          FROM modifier_tree t
          LEFT JOIN titles ti ON ti.item = t.node_id
          LEFT JOIN "values" v ON v.title = ti.id
          WHERE v.date IS NOT NULL
          GROUP BY v.date, t.direct_child_id
        ),

        modifier_child_total_by_date AS (
          SELECT
            s.date,
            SUM(ABS(s.recursive_should_sum)) AS value
          FROM modifier_child_sum_by_date s
          GROUP BY s.date
        ),

        modifier_own_total_by_date AS (
          SELECT
            v.date,
            ABS(COALESCE(SUM(v.should), 0)) AS value
          FROM titles ti
          LEFT JOIN "values" v ON v.title = ti.id
          WHERE ti.item = ${selectedModifierId} AND v.date IS NOT NULL
          GROUP BY v.date
        ),

        modifier_dates AS (
          SELECT date FROM modifier_child_total_by_date
          UNION
          SELECT date FROM modifier_own_total_by_date
        ),

        modifier_values AS (
          SELECT
            d.date,
            (
              CASE
                WHEN EXISTS (SELECT 1 FROM modifier_direct_children)
                THEN COALESCE(c.value, 0)
                ELSE COALESCE(o.value, 0)
              END
            )::numeric AS modifier_value
          FROM modifier_dates d
          LEFT JOIN modifier_child_total_by_date c ON c.date = d.date
          LEFT JOIN modifier_own_total_by_date o ON o.date = d.date
        ),

        latest_modifier AS (
          SELECT mv.modifier_value AS latest_value
          FROM modifier_values mv
          ORDER BY mv.date DESC
          LIMIT 1
        )

        SELECT
          b.date,
          COALESCE(
            CASE
              WHEN mv.modifier_value IS NULL OR mv.modifier_value = 0 THEN b.base_value
              WHEN lower(smi.label) LIKE '%verbraucherpreisindex%'
                OR lower(smi.label) LIKE '%inflation%'
                OR lower(smi.label) LIKE '%cpi%'
                OR lower(smi.label) LIKE '%vpi%'
                THEN b.base_value * (COALESCE(lm.latest_value, mv.modifier_value) / NULLIF(mv.modifier_value, 0))
              ELSE (b.base_value / NULLIF(mv.modifier_value, 0)) * 100
            END,
            b.base_value
          ) AS value
        FROM base_values b
        CROSS JOIN selected_modifier_item smi
        LEFT JOIN modifier_values mv ON mv.date = b.date
        LEFT JOIN latest_modifier lm ON true
        ORDER BY b.date;
      `);

      if (modifiedResult.length === 0) {
        return baseResult.map((row) => ({
          date: new Date(row.date),
          value: Number(row.recursive_should_sum ?? 0n),
        }));
      }

      return modifiedResult.map((row) => ({
        date: new Date(row.date),
        value: Number(row.value ?? 0),
      }));
    }),
});
