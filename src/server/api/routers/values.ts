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
    })
})