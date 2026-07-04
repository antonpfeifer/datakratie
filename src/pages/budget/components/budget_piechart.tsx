"use client";

import * as React from "react";
import { useRouter } from "next/router";
import {
  Cell,
  LabelList,
  Pie,
  PieChart,
  Sector,
  type PieSectorShapeProps,
} from "recharts";

import { ChartContainer, type ChartConfig } from "../../../components/ui/chart";
import { Button } from "../../../components/ui/button";
import { api } from "~/utils/api";
import type { ItemWithValue } from "~/server/api/routers/items";

import CurrencyUtils from "~/lib/currency_utils";

export const description = "A pie chart with a label list";

const EMPTY_ITEM_VALUES: ItemWithValue[] = [];

const pieColors = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#a3e635",
  "#2dd4bf",
  "#38bdf8",
];

type PieSliceProps = PieSectorShapeProps & {
  selectedPath?: string;
};

const renderPieSlice = (props: PieSliceProps) => {
  const isSelected = props.payload?.path === props.selectedPath;
  const outerRadius = Number(props.outerRadius ?? 0);

  return (
    <Sector
      {...props}
      outerRadius={isSelected ? outerRadius + 12 : outerRadius}
    />
  );
};

export function BudgetPieChart({ itemId }: { itemId: number }) {
  const router = useRouter();
  const { rootId } = router.query;
  const [currentYear] = React.useState(new Date());
  const [selectedPath, setSelectedPath] = React.useState<string>();

  const parsedRootId =
    typeof rootId === "string" ? parseInt(rootId, 10) : itemId;
  const rootItemId = !isNaN(parsedRootId) ? parsedRootId : itemId;
  const currentParentId = itemId;

  const currentParentQuery = api.items.byId.useQuery({ id: currentParentId });

  const rootItemQuery = api.items.byId.useQuery(
    { id: rootItemId },
    { enabled: rootItemId !== currentParentId },
  );

  const currentParentLabel =
    currentParentQuery.data?.label ?? `Item ${currentParentId}`;
  const rootItemLabel = rootItemQuery.data?.label ?? currentParentLabel;

  const currentYearDate = new Date(`${currentYear.getFullYear()}-01-01`);

  const chartQuery = api.items.childrenWithValues.useQuery({
    item: currentParentId,
    date: currentYearDate,
  });

  const currentParentOwnValueQuery = api.values.byItemAtDate.useQuery({
    item: currentParentId,
    date: currentYearDate,
  });

  const rootChartQuery = api.items.childrenWithValues.useQuery({
    item: rootItemId,
    date: currentYearDate,
  });

  const rawData = chartQuery.data ?? EMPTY_ITEM_VALUES;
  const rawRootData = rootChartQuery.data ?? EMPTY_ITEM_VALUES;

  const chartData = React.useMemo(
    () =>
      rawData
        .map((entry, index) => {
          const value = Number(entry.value ?? 0);

          return {
            ...entry,
            value,
            pieValue: Math.abs(value),
            colorKey: `item_${entry.path}`,
            fill: pieColors[index % pieColors.length],
          };
        })
        .filter(
          (entry) => Number.isFinite(entry.pieValue) && entry.pieValue > 0,
        ),
    [rawData],
  );

  const currentParentTotal = React.useMemo(
    () => rawData.reduce((sum, item) => sum + Math.abs(item.value), 0),
    [rawData],
  );

  const currentParentDisplayTotal =
    rawData.length === 0
      ? Math.abs(currentParentOwnValueQuery.data ?? 0)
      : currentParentTotal;

  const rootTotal = React.useMemo(() => {
    if (rootItemId === currentParentId) {
      return currentParentDisplayTotal;
    }

    return rawRootData.reduce((sum, item) => sum + Math.abs(item.value), 0);
  }, [currentParentId, currentParentDisplayTotal, rawRootData, rootItemId]);

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

  React.useEffect(() => {
    if (chartData.length === 0) {
      setSelectedPath(undefined);
      return;
    }

    if (
      !selectedPath ||
      !chartData.some((entry) => entry.path === selectedPath)
    ) {
      setSelectedPath(chartData[0]?.path);
    }
  }, [chartData, selectedPath]);

  const selectedEntry = React.useMemo(
    () => chartData.find((entry) => entry.path === selectedPath),
    [chartData, selectedPath],
  );

  const selectedSliceValue = Math.abs(selectedEntry?.value ?? 0);
  const percentageOfParent =
    currentParentTotal > 0
      ? Math.round((selectedSliceValue / currentParentTotal) * 1000) / 10
      : 0;
  const percentageOfRoot =
    rootTotal > 0
      ? Math.round((selectedSliceValue / rootTotal) * 1000) / 10
      : 0;

  const drillDown = (nextParentPath: string) => {
    void router.push({
      pathname: `/item/${nextParentPath}`,
      query: { rootId: rootItemId },
    });
  };

  return (
    <div>
      <div>
        <div className="pt-15 pb-15 text-center">
          <h2 className="font-serif text-4xl leading-none font-semibold tracking-tight md:text-5xl">
            {currentParentLabel}
          </h2>
          <div className="text-muted-foreground mt-2 text-lg">
            {CurrencyUtils.formatBudgetValue(currentParentDisplayTotal)}
          </div>
        </div>
        {chartData.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-[minmax(0,400px)_1fr] md:items-center">
            <div className="grid gap-3">
              <ChartContainer
                config={chartConfig}
                className="[&_.recharts-text]:fill-background mx-auto h-[400px] w-full max-w-[400px]"
              >
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="pieValue"
                    labelLine={false}
                    nameKey="label"
                    isAnimationActive={false}
                    shape={(props: PieSectorShapeProps) =>
                      renderPieSlice({ ...props, selectedPath })
                    }
                  >
                    {chartData.map((entry) => {
                      const isSelected = entry.path === selectedPath;

                      return (
                        <Cell
                          key={entry.path}
                          fill={entry.fill}
                          stroke={isSelected ? "var(--foreground)" : undefined}
                          strokeWidth={isSelected ? 2 : 0}
                          style={{
                            strokeColor: isSelected
                              ? "var(--background)"
                              : undefined,
                            cursor: "pointer",
                            opacity: isSelected ? 1 : 0.75,
                          }}
                          onClick={() => setSelectedPath(entry.path)}
                        />
                      );
                    })}
                    <LabelList
                      dataKey="label"
                      className="fill-background"
                      stroke="none"
                      fontSize={12}
                      style={{ pointerEvents: "none" }}
                      formatter={(value) => String(value ?? "")}
                    />
                  </Pie>
                  {/* <ChartLegend
                  content={<ChartLegendContent nameKey="colorKey" />}
                  className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                /> */}
                </PieChart>
              </ChartContainer>
            </div>

            <div className="bg-muted/20 grid gap-3 p-4 text-sm">
              {selectedEntry ? (
                <>
                  <div>
                    <div className="text-foreground text-lg font-semibold">
                      {CurrencyUtils.formatBudgetValue(selectedEntry.value)}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {selectedEntry.label}
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    {formatPercent(percentageOfParent)} von „
                    {currentParentLabel}“
                  </div>{" "}
                  {rootItemLabel !== currentParentLabel ? (
                    <div className="text-muted-foreground">
                      {formatPercent(percentageOfRoot)} von {rootItemLabel}
                    </div>
                  ) : null}
                  <div>{selectedEntry.description}</div>
                  <Button
                    type="button"
                    className="mt-2 w-fit"
                    onClick={() => drillDown(selectedEntry.path)}
                  >
                    Tiefer anzeigen
                  </Button>
                </>
              ) : (
                <div className="text-muted-foreground">
                  Wähle ein Element im Diagramm aus.
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function formatPercent(value: number): string {
  return `${new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  }).format(value)}%`;
}

export default function ComponentAsPage() {
  return null;
}
