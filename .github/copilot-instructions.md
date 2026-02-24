# Copilot instructions for datakratie

## Big picture architecture
- This is a **Next.js Pages Router** app (not App Router). Main page lives in `src/pages/index.tsx` and app bootstrap in `src/pages/_app.tsx`.
- Backend is **tRPC v11**:
  - API handler: `src/pages/api/trpc/[trpc].ts`
  - Router composition: `src/server/api/root.ts`
  - Procedure/context setup: `src/server/api/trpc.ts`
  - Client hooks: `src/utils/api.ts`
- Data layer is **Prisma + PostgreSQL**:
  - Source schema: `prisma/schema.prisma`
  - Prisma client output is customized to `generated/prisma` and imported from `src/server/db.ts`.

## Project-specific constraints and gotchas
- Do **not** edit files under `generated/prisma/` manually; regenerate instead.
- Keep `prisma` and `@prisma/client` versions aligned (same major). Current package versions can break `npx prisma generate` if mismatched.
- `src/env.js` requires both `DATABASE_URL` and `DIRECT_URL`, but `.env.example` currently only includes `DATABASE_URL`.
- `postRouter` (`src/server/api/routers/post.ts`) is scaffold/template code and may not match the current Prisma schema (`items`, `titles`, `values`). Validate schema-model alignment before extending it.

## Coding patterns to follow here
- Use path alias imports (`~/...`) from `tsconfig.json`; avoid long relative imports in app code.
- New API features should follow this flow:
  1. Add/extend a router in `src/server/api/routers/*.ts` using `createTRPCRouter` + `publicProcedure`.
  2. Register router in `src/server/api/root.ts`.
  3. Call it from UI via `api.<router>.<procedure>.useQuery/useMutation` in client components.
- Validate inputs with **Zod** at procedure boundaries (see existing router patterns).
- Access DB only through `ctx.db` in tRPC procedures; context is created in `src/server/api/trpc.ts`.
- UI components are shadcn/radix-style and live in `src/components/ui/*`; global design tokens are in `src/styles/globals.css`.

## Developer workflows (local)
- Package manager: **Yarn v1** (`packageManager` in `package.json`).
- Install deps: `yarn install` (runs `postinstall` -> `prisma generate`).
- Start local Postgres container: `./start-database.sh` (reads `.env`, supports Docker/Podman).
- Main commands:
  - `yarn dev` (Next dev)
  - `yarn check` (lint + typecheck)
  - `yarn lint`, `yarn typecheck`, `yarn build`
  - `yarn db:push`, `yarn db:migrate`, `yarn db:studio`

## When editing data or API code
- Update `prisma/schema.prisma` first, then regenerate client and apply DB changes.
- If adding new env vars, update both `.env.example` and `src/env.js` schema.
- Prefer small, typed tRPC procedures over direct fetch endpoints for internal app data flow.
