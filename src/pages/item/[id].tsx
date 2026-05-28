import * as React from "react"
import { useRouter } from "next/router"
import { api } from "~/utils/api"
import { HistoryChartCard } from "~/pages/history/components/history_chart_card"
import { BudgetPieChart } from "~/pages/budget/components/budget_piechart"
import { BudgetItemBreadcrumb } from "../budget/components/budget_item_breadcrumb"
import { GlobalSearch } from "~/components/global_search"

import {
  Menubar,
} from "~/components/ui/menubar"

export default function ItemPage() {
  const router = useRouter()
  const { id } = router.query
  const itemId = typeof id === "string" ? parseInt(id, 10) : undefined

  const currentYearDate = new Date(`${new Date().getFullYear()}-01-01`)
  
  const childrenQuery = api.items.childrenWithValues.useQuery(
    { item: itemId!, date: currentYearDate },
    { enabled: itemId !== undefined }
  )

  const hasChildren = childrenQuery.data && childrenQuery.data.length > 0

  const itemQuery = api.items.byId.useQuery(
    { item: itemId! },
    { enabled: itemId !== undefined }
  )
  
  const item = itemQuery.data ? { id: itemQuery.data.id, label: itemQuery.data.label, description: null } : null

  return (
    <main className="flex min-h-screen items-start justify-center bg-slate-50 p-6 w-full">
      <div className="flex w-full max-w-6xl gap-4 flex-col">
        {itemId !== undefined ? (
          <>
            <Menubar className="p-[10px] flex items-center justify-between h-auto"> 
              <BudgetItemBreadcrumb childId={itemId} />
              <div className="p-1">
                <GlobalSearch />
              </div>
            </Menubar>
         
            <HistoryChartCard item={item} />
            {hasChildren ? (
              <BudgetPieChart itemId={itemId} />
            ) : null}
          </>
        ) : (
          <div className="text-slate-500 text-center">Lade...</div>
        )}
      </div>
    </main>
  )
}

