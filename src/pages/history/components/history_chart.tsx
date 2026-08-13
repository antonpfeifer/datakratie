import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../../components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import CurrencyUtils from "~/lib/currency_utils";

export const HistoryChart = ({
  chartData,
  tooltipLabel,
}: React.ComponentProps<"div"> & {
  chartData: Array<object>;
  tooltipLabel: string;
}) => {
  const chartConfig = {
    views: {
      label: tooltipLabel,
    },
    value: {
      label: tooltipLabel,
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[300px] w-full"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 24,
          left: 24,
          right: 32,
          bottom: 8,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          interval="preserveStartEnd"
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("de-DE", {
              year: "numeric",
            });
          }}
        />
        <YAxis
          width={100}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            const numValue = typeof value === "number" ? value : Number(value);
            if (isNaN(numValue)) return String(value);
            return CurrencyUtils.formatBudgetValue(numValue);
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
                });
              }}
              formatter={(value) => {
                const numValue =
                  typeof value === "number" ? value : Number(value);
                if (isNaN(numValue)) return value;
                return CurrencyUtils.formatBudgetValue(numValue);
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
  );
};
export default function ComponentAsPage() {
  return null;
}
