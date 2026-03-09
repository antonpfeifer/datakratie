import { BudgetPieChart } from "~/pages/budget/components/budget_piechart";
import { PageSidebarNav } from "~/components/page_sidebar_nav";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function BudgetPage() {
  return (
    <SidebarProvider>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-6">
        <div className="flex w-full max-w-6xl gap-4">
          <PageSidebarNav />
          <SidebarInset>
            <BudgetPieChart itemId={14} />
          </SidebarInset>
        </div>
      </main>
    </SidebarProvider>
  );
}