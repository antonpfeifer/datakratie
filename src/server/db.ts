import { env } from "~/env";
import { PrismaClient } from "../../generated/prisma";
import { createClient } from "@supabase/supabase-js";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY);
