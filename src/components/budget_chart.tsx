import React from "react"
import * as RechartsPrimitive from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "./ui/chart"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"



function BudgetChart({
    chartData,
    tooltipLabel
}: React.ComponentProps<"div"> & {
    chartData: Array<Object>
    tooltipLabel: string
}) {
    const chartConfig = {
        views: {
            label: tooltipLabel,
        },
        value: {
            label: tooltipLabel,
            color: "var(--chart-1)",
        },
        } satisfies ChartConfig

    return (
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("de-DE", {
                  year: "numeric"
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey="value"
              type="monotone"
              stroke={`var(--color-value)`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
    )
}

export { BudgetChart }