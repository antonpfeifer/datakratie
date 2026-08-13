import { Prisma } from "generated/prisma";
import { z } from "zod";
import ItemUtils from "~/lib/item_utils";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type ItemWithValue = {
  path: string;
  value: number;
  label: string;
  description: string;
};

export const itemsRouter = createTRPCRouter({
  parents: publicProcedure
    .input(z.object({ path: z.string() }))
    .query(async ({ ctx, input }) => {
      const parentIds = ItemUtils.getIds(input.path);
      console.log("Parent IDs: " + parentIds.toString());
      const data = await ctx.db.items.findMany({
        where: {
          id: { in: parentIds },
        },
      });

      return data
        .sort((a, b) => a.id - b.id)
        .map((row) => ({
          path: row.path,
          label: row.label ?? `Item ${row.id}`,
        }));
    }),

  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ ctx, input }) => {
      const normalizedQuery = input.query.trim();
      const data = await ctx.db.items.findMany({
        where:
          normalizedQuery.length === 0
            ? { description: { not: null } }
            : {
                OR: [
                  { label: { contains: normalizedQuery, mode: "insensitive" } },
                  {
                    description: {
                      contains: normalizedQuery,
                      mode: "insensitive",
                    },
                  },
                ],
              },
        select: {
          id: true,
          description: true,
          label: true,
          path: true,
        },
        orderBy: {
          description: "asc",
        },
        take: 100,
      });

      return data;
    }),
  byId: publicProcedure
    .input(z.object({ id: z.number().int().nonnegative() }))
    .query(async ({ ctx, input }) => {
      const row = await ctx.db.items.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          label: true,
          parent: true,
          path: true,
        },
      });

      if (!row) {
        return null;
      }

      return {
        id: Number(row.id),
        path: row.path,
        label: row.label ?? `Item ${input.id}`,
        parent: row.parent ? Number(row.parent) : null,
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
                dc.id AS direct_child_id, dc.path, dc.label, dc.description,
                COALESCE(s.recursive_should_sum, 0) AS recursive_should_sum
                FROM items dc
                LEFT JOIN sum_by_child s ON s.direct_child_id = dc.id
                WHERE dc.parent = ${input.item}
                ORDER BY dc.id;`);

      const rows =
        (data as Array<{
          direct_child_id: number;
          path: string | null;
          recursive_should_sum: bigint | null;
          label: string | null;
          description: string | null;
        }>) ?? [];

      return rows.map<ItemWithValue>((row) => ({
        path: row.path ?? String(row.direct_child_id),
        label: row.label ?? `Item ${row.direct_child_id}`,
        value: Number(row.recursive_should_sum ?? 0n),
        description: row.description ?? "",
      }));
    }),
});
