import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type ModifierWithItemLabel = {
  id: number;
  title: string;
  description: string;
  function: string;
  isRecursive: boolean;
  startIndex: number;
  itemLabel: string | null;
};

export const modifiersRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ ctx, input }) => {
      const normalizedQuery = input.query.trim();

      const data = await ctx.db.modifiers.findMany({
        where: normalizedQuery.length === 0
          ? {}
          : {
              OR: [
                { title: { contains: normalizedQuery, mode: "insensitive" } },
                { description: { contains: normalizedQuery, mode: "insensitive" } },
                {
                  items: {
                    is: {
                      OR: [
                        { label: { contains: normalizedQuery, mode: "insensitive" } },
                        { description: { contains: normalizedQuery, mode: "insensitive" } },
                      ],
                    },
                  },
                },
              ],
            },
        select: {
          id: true,
          title: true,
          description: true,
          function: true,
          is_recursive: true,
          start_index: true,
          items: {
            select: {
              label: true,
            },
          },
        },
        orderBy: {
          title: "asc",
        },
        take: 50,
      });

      return data.map<ModifierWithItemLabel>((modifier) => ({
        id: Number(modifier.id),
        title: modifier.title,
        description: modifier.description,
        function: modifier.function,
        isRecursive: modifier.is_recursive,
        startIndex: modifier.start_index,
        itemLabel: modifier.items?.label ?? null,
      }));
    }),
});