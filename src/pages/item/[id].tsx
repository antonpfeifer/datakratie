import * as React from "react"
import { useRouter } from "next/router"
import { api } from "~/utils/api"
import { HistoryChartCard } from "~/pages/history/components/history_chart_card"
import { BudgetPieChart } from "~/pages/budget/components/budget_piechart"

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
    <main className="flex min-h-screen items-start justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-6 w-full">
      <div className="flex w-full max-w-6xl gap-4 flex-col">
        {itemId !== undefined ? (
          <>
            <HistoryChartCard item={item} />
            {hasChildren ? (
              <BudgetPieChart itemId={itemId} />
            ) : null}
          </>
        ) : (
          <div className="text-white text-center">Lade...</div>
        )}
      </div>
    </main>
  )
}

