import type { Item } from "~/hooks/useState";
import { useState } from "~/hooks/useState";
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
  const modifier = useState((controller) => controller.modifier);

  const chartQuery = api.values.byItemAndModifiers.useQuery(
    {
      item: item?.id ?? 0,
      modifiers: modifier ? [modifier.id] : [],
    },
    { enabled: item !== null },
  );

  if (!item) {
    return (
      <Card className="flex min-h-[320px] flex-col p-4">
        <CardHeader className="pb-2">
          <CardTitle>Verlauf</CardTitle>
          <CardDescription>
            Wähle oben einen Posten aus, um den Verlauf zu sehen.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const chartData =
    chartQuery.data?.map((entry: any) => {
      return { date: entry.date.toISOString(), value: Number(entry.value) };
    }) ?? [];

  const label = item?.label ?? `Item ${item?.id ?? "?"}`;
  const modifierLabel = modifier ? modifier.title : null;

  return (
    <Card className="flex flex-col p-4">
      <CardHeader className="pb-2">
        <CardTitle>{label}</CardTitle>
        <CardDescription>
          {modifierLabel
            ? `Jahresverlauf relativ zu ${modifierLabel}`
            : "Jahresverlauf der Werte"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {chartQuery.isLoading ? (
          <p className="text-muted-foreground text-sm">Lade Verlauf…</p>
        ) : chartData.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Keine Werte für diesen Posten gefunden.
          </p>
        ) : (
          <HistoryChart chartData={chartData} tooltipLabel={label} />
        )}
      </CardContent>
    </Card>
  );
};

export default HistoryChartCard
