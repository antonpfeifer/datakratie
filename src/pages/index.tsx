import { BudgetItemSearch } from "./budget/components/budget_item_search"

const GRID_DOTS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
  pink: Math.random() > 0.6,
}))

export default function HomePage() {
  return (
    <>
      <div className="hero-grid">
        {GRID_DOTS.map((dot) => (
          <div
            key={dot.id}
            className={`hero-dot ${dot.pink ? "pink" : ""}`}
            style={{
              left: dot.left,
              bottom: "-10px",
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-2xl flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-[5rem] mb-8">
            Faktenlage
          </h1>
          <div className="w-full relative bg-card/80 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-foreground/10 overflow-hidden">
            <BudgetItemSearch />
          </div>
        </div>
      </main>
    </>
  )
}
