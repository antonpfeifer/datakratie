import { Prisma } from "generated/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type ItemWithValue = {id: number, value: number, label: string};

export const itemsRouter = createTRPCRouter({
    byId: publicProcedure
        .input(z.object({ item: z.number().int().nonnegative() }))
        .query(async ({ ctx, input }) => {
            const row = await ctx.db.items.findUnique({
                where: {
                    id: BigInt(input.item),
                },
                select: {
                    id: true,
                    label: true,
                },
            });

            if (!row) {
                return null;
            }

            return {
                id: Number(row.id),
                label: row.label ?? `Item ${input.item}`,
            };
        }),

    childrenWithValues: publicProcedure
        .input(z.object({ item: z.number().int().nonnegative(), date: z.date() }))
        .query(async ({ ctx, input }) => {
            const data = await ctx.db.$queryRaw(Prisma.sql`
                WITH RECURSIVE item_tree AS (
                SELECT i.id AS node_id, i.id AS direct_child_id
                FROM items i
                WHERE i.parent = ${input.item}

                UNION ALL

                SELECT c.id AS node_id, t.direct_child_id
                FROM items c
                JOIN item_tree t ON c.parent = t.node_id
                ),

                sum_by_child AS (
                SELECT
                    t.direct_child_id,
                    COALESCE(SUM(v.should), 0) AS recursive_should_sum
                FROM item_tree t
                LEFT JOIN titles ti ON ti.item = t.node_id
                LEFT JOIN "values" v ON v.title = ti.id
                WHERE v.date = ${input.date}
                GROUP BY t.direct_child_id
                )

                SELECT
                dc.id AS direct_child_id, dc.label, dc.description,
                COALESCE(s.recursive_should_sum, 0) AS recursive_should_sum
                FROM items dc
                LEFT JOIN sum_by_child s ON s.direct_child_id = dc.id
                WHERE dc.parent = ${input.item}
                ORDER BY dc.id;`);

            const rows = (data as Array<{ direct_child_id: bigint; recursive_should_sum: bigint | null, label: string }>) ?? [];

            return rows.map<ItemWithValue>((row) => ({
                id: Number(row.direct_child_id),
                label: row.label,
                value: Number(row.recursive_should_sum ?? 0n),
            }));
        }),
});