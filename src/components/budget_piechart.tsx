"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Cell, LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"
import { api } from "~/utils/api"

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

export function BudgetPieChart({itemId}: {itemId: number}) {
    const [path, setPath] = React.useState<PathNode[]>([{ id: itemId, label: null }]);

    React.useEffect(() => {
      setPath([{ id: itemId, label: null }]);
    }, [itemId]);

    const currentParent = path[path.length - 1] ?? { id: itemId, label: null };
    const currentParentId = currentParent.id;

    const currentParentQuery = api.items.byId.useQuery(
      { item: currentParentId },
      { enabled: currentParent.label === null },
    );

    const currentParentLabel = currentParent.label ?? currentParentQuery.data?.label ?? `Item ${currentParentId}`;

    const chartQuery = api.items.childrenWithValues.useQuery({item: currentParentId});
    const rawData = chartQuery.data ?? [];

    const chartData = React.useMemo(
      () =>
        rawData.map((entry, index) => ({
          ...entry,
          colorKey: `item_${entry.id}`,
          fill: pieColors[index % pieColors.length],
        })),
      [rawData],
    );

    const chartConfig = React.useMemo<ChartConfig>(() => {
      const config: ChartConfig = {
        value: {
          label: "Summe",
        },
      };

      chartData.forEach((entry, index) => {
        config[entry.colorKey] = {
          label: entry.label,
          color: pieColors[index % pieColors.length],
        };
      });

      return config;
    }, [chartData]);

    const drillDown = (nextParentId: number, nextParentLabel: string) => {
      setPath((prev) => [...prev, { id: nextParentId, label: nextParentLabel }]);
    };

    const drillUp = () => {
      setPath((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Haushalt</CardTitle>
        <CardDescription>
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
              content={<ChartTooltipContent nameKey="label" hideLabel />}
            />
            <Pie data={chartData} dataKey="value" nameKey="label">
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
                formatter={(value: string) =>
                  value
                }
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="label" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
