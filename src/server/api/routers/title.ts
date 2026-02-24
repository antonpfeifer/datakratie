import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const titlesRouter = createTRPCRouter({
  search: publicProcedure
  .input(z.object({query: z.string()}))
  .query(async ({ ctx, input }) => {
    const normalizedQuery = input.query.trim();

    const data = await ctx.db.titles.findMany({
      where: {
        description: normalizedQuery.length === 0
          ? { not: null }
          : { contains: normalizedQuery, mode: "insensitive" },
      },
      select: {
        id: true,
        description: true,
      },
      orderBy: {
        description: "asc",
      },
      take: 100,
    });

    const uniqueByDescription = new Set<string>();

    return data
      .filter((row) => row.description !== null && row.description.length > 0)
      .map((row) => ({
        id: Number(row.id),
        description: row.description as string,
      }))
      .filter((row) => {
        const key = row.description.trim().toLocaleLowerCase("de-DE");
        if (uniqueByDescription.has(key)) {
          return false;
        }
        uniqueByDescription.add(key);
        return true;
      })
      .slice(0, 20);
  })
});