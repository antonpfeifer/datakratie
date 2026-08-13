import { titlesRouter } from "~/server/api/routers/title";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { itemsRouter } from "./routers/items";
import { modifiersRouter } from "./routers/modifiers";
import { valuesRouter } from "./routers/values";
import { yearsRouter } from "./routers/years";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  titles: titlesRouter,
  items: itemsRouter,
  modifiers: modifiersRouter,
  values: valuesRouter,
  years: yearsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
