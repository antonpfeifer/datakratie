import { Prisma } from "generated/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

type HistoryValueRow = {
  date: Date | string | number;
  recursive_should_sum: bigint | number | null;
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
      const result = await ctx.db.$queryRaw<HistoryValueRow[]>(Prisma.sql`
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

      return result.map((row) => ({
        date: new Date(row.date),
        value: Number(row.recursive_should_sum ?? 0n),
      }));
    }),
});
