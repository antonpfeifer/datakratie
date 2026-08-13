import * as React from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { HistoryChartCard } from "~/pages/history/components/history_chart_card";
import { ModifierSearch } from "~/pages/history/components/modifier_search";
import { BudgetPieChart } from "~/pages/budget/components/budget_piechart";
import { BudgetItemBreadcrumb } from "../budget/components/budget_item_breadcrumb";
import { GlobalSearch } from "~/components/global_search";

import { Menubar } from "~/components/ui/menubar";
import ItemUtils from "~/lib/item_utils";

export default function ItemPage() {
  const router = useRouter();
  const { path } = router.query;

  const itemPath: string | undefined =
    typeof path === "string" ? path : undefined;

  if (!itemPath) {
    return (
      <main className="flex min-h-screen w-full items-start justify-center bg-slate-50 p-6">
        <div className="text-center text-slate-500">Lade...</div>
      </main>
    );
  }

  const itemId = ItemUtils.getId(itemPath);

  const currentYearDate = new Date(`${new Date().getFullYear()}-01-01`);

  const childrenQuery = api.items.childrenWithValues.useQuery(
    { item: ItemUtils.getId(itemPath), date: currentYearDate },
    { enabled: itemPath !== undefined },
  );

  const itemQuery = api.items.byId.useQuery(
    { id: itemId },
    { enabled: itemId !== undefined },
  );

  const item = itemQuery.data
    ? { id: itemQuery.data.id, label: itemQuery.data.label, description: null }
    : null;

  return (
    <main className="flex min-h-screen w-full items-start justify-center bg-slate-50 p-6">
      <div className="flex w-full max-w-6xl flex-col gap-4">
        {itemId !== undefined ? (
          <>
            <BudgetItemBreadcrumb currentItemPath={itemPath} />
            <BudgetPieChart itemId={itemId} />
            <ModifierSearch />
            <HistoryChartCard item={item} />
          </>
        ) : (
          <div className="text-center text-slate-500">Lade...</div>
        )}
      </div>
    </main>
  );
}
