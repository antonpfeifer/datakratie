import { BudgetItemSearch } from "./budget/components/budget_item_search";

const GRID_DOTS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
  pink: Math.random() > 0.6,
}));

export default function HomePage() {
  return (
    <>
      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-[5rem]">
            Faktenlage
          </h1>
          <div className="bg-card/80 ring-foreground/10 relative w-full overflow-hidden rounded-xl shadow-lg ring-1 backdrop-blur-sm">
            <BudgetItemSearch />
          </div>
        </div>
      </main>
    </>
  );
}
