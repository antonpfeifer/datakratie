"use client"

import * as React from "react"
import { Cell, LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../../components/ui/chart"
import { api } from "~/utils/api"
import { DropdownMenuYears } from "./dropdown_year"

export const description = "A pie chart with a label list"

const pieColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

type PathNode = {
  id: number
  label: string | null
}

export function BudgetPieChart({ itemId }: { itemId: number }) {
  const [path, setPath] = React.useState<PathNode[]>([{ id: itemId, label: null }])
  const [currentYear, setCurrentYear] = React.useState(new Date())

  React.useEffect(() => {
    setPath([{ id: itemId, label: null }])
  }, [itemId])

  const rootNode = path[0] ?? { id: itemId, label: null }
  const rootItemId = rootNode.id

  const currentParent = path[path.length - 1] ?? { id: itemId, label: null }
  const currentParentId = currentParent.id

  const currentParentQuery = api.items.byId.useQuery(
    { item: currentParentId },
    { enabled: currentParent.label === null },
  )

  const rootItemQuery = api.items.byId.useQuery(
    { item: rootItemId },
    { enabled: rootNode.label === null && rootItemId !== currentParentId },
  )

  const currentParentLabel =
    currentParent.label ?? currentParentQuery.data?.label ?? `Item ${currentParentId}`

  const rootItemLabel = rootNode.label ?? rootItemQuery.data?.label ?? currentParentLabel

  const currentYearDate = new Date(`${currentYear.getFullYear()}-01-01`)

  const chartQuery = api.items.childrenWithValues.useQuery({
    item: currentParentId,
    date: currentYearDate,
  })

  const rootChartQuery = api.items.childrenWithValues.useQuery({
    item: rootItemId,
    date: currentYearDate,
  })

  const rawData: Array<{ id: number; label: string; value: number }> =
    (chartQuery.data as Array<{ id: number; label: string; value: number }> | undefined) ?? []
  const rawRootData: Array<{ id: number; label: string; value: number }> =
    (rootChartQuery.data as Array<{ id: number; label: string; value: number }> | undefined) ?? []

  const chartData = React.useMemo(
    () =>
      rawData.map((entry, index) => ({
        ...entry,
        colorKey: `item_${entry.id}`,
        fill: pieColors[index % pieColors.length],
      })),
    [rawData],
  )

  const currentParentTotal = React.useMemo(
    () => rawData.reduce((sum, item) => sum + item.value, 0),
    [rawData],
  )

  const rootTotal = React.useMemo(() => {
    if (rootItemId === currentParentId) {
      return currentParentTotal
    }

    return rawRootData.reduce((sum, item) => sum + item.value, 0)
  }, [currentParentId, currentParentTotal, rawRootData, rootItemId])

  const chartConfig = React.useMemo<ChartConfig>(() => {
    const config: ChartConfig = {
      value: {
        label: "Summe",
      },
    }

    chartData.forEach((entry, index) => {
      config[entry.colorKey] = {
        label: entry.label,
        color: pieColors[index % pieColors.length],
      }
    })

    return config
  }, [chartData])

  const drillDown = (nextParentId: number, nextParentLabel: string) => {
    setPath((prev) => [...prev, { id: nextParentId, label: nextParentLabel }])
  }

  const drillUp = () => {
    setPath((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }

  const setYear = (year: Date) => {
    setCurrentYear(year)
    chartQuery.refetch()
    rootChartQuery.refetch()
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Haushalt</CardTitle>
        <DropdownMenuYears onSelect={(year) => setYear(year)} currentYear={currentYear}></DropdownMenuYears>
        <CardDescription className="w-fit">
          {currentParentLabel}
        </CardDescription>
        <div className="mt-2">
          <Button variant="outline" size="sm" onClick={drillUp} disabled={path.length <= 1}>
            Eine Ebene zurück
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="label"
                  hideLabel
                  formatter={(value, name) => {
                    const entryLabel = String(name ?? "")
                    const entryValue = Number(value ?? 0)

                    const percentageOfParent =
                      currentParentTotal > 0 ? Math.round((entryValue / currentParentTotal) * 1000) / 10 : 0

                    const percentageOfRoot =
                      rootTotal > 0 ? Math.round((entryValue / rootTotal) * 1000) / 10 : 0

                    return (
                      <div className="grid gap-1">
                        <div className="text-foreground text-sm font-semibold">
                          {formatEuroBillions(entryValue)}
                        </div>
                        <div className="text-muted-foreground">
                          {formatPercent(percentageOfParent)} von „{currentParentLabel}“
                        </div>
                        <div className="text-muted-foreground">
                          {formatPercent(percentageOfRoot)} des {rootItemLabel}
                        </div>
                        <div className="text-muted-foreground/80 text-[11px]">{entryLabel}</div>
                      </div>
                    )
                  }}
                />
              }
            />
            <Pie data={chartData} dataKey="value" labelLine={false} nameKey="label">
              {chartData.map((entry) => (
                <Cell
                  key={entry.id}
                  fill={entry.fill}
                  style={{ cursor: "pointer" }}
                  onClick={() => drillDown(entry.id, entry.label)}
                />
              ))}
              <LabelList
                dataKey="label"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: string) => value}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="colorKey" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function formatEuroBillions(value: number): string {
  const inBillions = value / 1_000_000_000
  const formatted = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(inBillions)

  return `${formatted} Mrd. €`
}

function formatPercent(value: number): string {
  return `${new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  }).format(value)}%`
}
