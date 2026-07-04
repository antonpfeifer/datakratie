import type { Item, Title } from "~/hooks/useState";
import { api } from "~/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { HistoryChart } from "./history_chart";

export const HistoryChartCard = ({ item }: { item: Item | null }) => {
  if (!item) {
    return <></>;
  }
  const chartQuery = api.values.byItemAndModifiers.useQuery({
    item: item.id,
    modifiers: [],
  });

  const chartData =
    chartQuery.data?.map((entry: any) => {
      return { date: entry.date.toISOString(), value: Number(entry.value) };
    }) ?? [];

  const label = item?.label ?? `Item ${item?.id ?? "?"}`;

  return (
    <div className="pt-10 pb-20">
      {chartQuery.isLoading ? (
        <p className="text-muted-foreground text-sm">Lade Verlauf…</p>
      ) : chartData.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Keine Werte für diesen Posten gefunden.
        </p>
      ) : (
        <HistoryChart chartData={chartData} tooltipLabel={label} />
      )}
    </div>
  );
};
export default function ComponentAsPage() {
  return null;
}
