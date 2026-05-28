import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
    const input = { query: 14 };
    const result = await prisma.$queryRaw`
        WITH RECURSIVE ancestors AS (
            SELECT id, label, parent, 0 as level
            FROM items
            WHERE id = ${input.query}
            
            UNION ALL
            
            SELECT i.id, i.label, i.parent, a.level + 1
            FROM items i
            JOIN ancestors a ON a.parent = i.id
        )
        SELECT id, label FROM ancestors
        ORDER BY level DESC;
    `;
    console.log(result);
}

main().catch(console.error).finally(() => prisma.$disconnect());
