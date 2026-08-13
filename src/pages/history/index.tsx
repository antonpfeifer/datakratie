import { PageSidebarNav } from "~/components/page_sidebar_nav";
import { ModifierSearch } from "~/pages/history/components/modifier_search";
import { TitlesSearch } from "~/pages/history/components/titles_search";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { useState } from "~/hooks/useState";
import { HistoryChartCard } from "~/pages/history/components/history_chart_card";

export default function HistoryPage() {
  const item = useState((state) => state.item);


  return (
    <SidebarProvider>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-6">
        <div className="flex w-full max-w-6xl gap-4">
          <PageSidebarNav />
          <SidebarInset className="flex flex-col gap-4">
            <TitlesSearch />
            <ModifierSearch />
            <HistoryChartCard item={item} />
          </SidebarInset>
        </div>
      </main>
    </SidebarProvider>
  );
}