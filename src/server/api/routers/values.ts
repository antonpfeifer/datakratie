import { Prisma } from "generated/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const valuesRouter = createTRPCRouter({
    byTitles: publicProcedure
    .input(z.object({titles: z.array(z.number())}))
    .query(async ({ctx, input}) => {
        const results = await ctx.db.values.groupBy({
            by: ['date'],
            where: {
                title: {
                    in: input.titles
                },
            },
            _sum: {
                should: true,
            },
        });
        return results.map((res) => {
            return { date: res.date, value: res._sum.should };
        });
    },),
    byItemAndModifiers: publicProcedure
    .input(z.object({item: z.number().int().nonnegative(), modifiers: z.array(z.number())})).query(async ({ctx, input}) => {
        const result = await ctx.db.$queryRaw(Prisma.sql`
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
            GROUP BY v.date
            )

            SELECT
            s.date,
            COALESCE(s.recursive_should_sum, 0) AS recursive_should_sum
            FROM sum_by_child s
            ORDER BY s.date;`) as Array<{ date: bigint; recursive_should_sum: bigint | null }>;

            return result.map((row) => {
                return { date: new Date(Number(row.date)), value: Number(row.recursive_should_sum ?? 0n) };
            });


        
    }),
})