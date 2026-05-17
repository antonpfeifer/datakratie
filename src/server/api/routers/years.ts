import { Prisma } from "generated/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type ItemWithValue = {id: number, value: number, label: string};

export const yearsRouter = createTRPCRouter({
    all: publicProcedure.query(async ({ ctx, input }) => {
        const res = await ctx.db.values.findMany
        ({
            distinct: ["date"],
            select: {
                date: true,
            },
            orderBy: {
                date: "asc",
            },
        });

        return res;
            }),
        });