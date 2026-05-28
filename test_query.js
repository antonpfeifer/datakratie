import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
    const input = { item: 14 };
    const result = await prisma.$queryRaw`
            WITH RECURSIVE item_tree AS (
            SELECT i.id AS node_id, i.id AS direct_child_id
            FROM items i
            WHERE i.parent = ${input.item} OR i.id = ${input.item}

            UNION ALL

            SELECT c.id AS node_id, t.direct_child_id
            FROM items c
            JOIN item_tree t ON c.parent = t.node_id
            ),

            sum_by_child AS (
            SELECT
                v.date,
                COALESCE(SUM(v.should), 0) AS recursive_should_sum
            FROM item_tree t
            LEFT JOIN titles ti ON ti.item = t.node_id
            LEFT JOIN "values" v ON v.title = ti.id
            WHERE v.date IS NOT NULL
            GROUP BY v.date
            )

            SELECT
            s.date,
            COALESCE(s.recursive_should_sum, 0) AS recursive_should_sum
            FROM sum_by_child s
            ORDER BY s.date;`;
    console.log(result);
}

main().catch(console.error).finally(() => prisma.$disconnect());
