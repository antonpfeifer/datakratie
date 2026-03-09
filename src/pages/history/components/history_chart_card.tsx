import type { Title } from "~/hooks/useState";
import { api } from "~/utils/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { HistoryChart } from "./history_chart";
import {ChartItem} from "./chart_item"

export const HistoryChartCard = ({
  titles
} : {titles: Array<Title>}) => {
  const chartQuery = api.values.byTitles.useQuery({titles: titles.map((title) => title.id)});

  const chartData = chartQuery.data?.map((entry) => {
    return {date: entry.date.toISOString(), value: Number(entry.value)}
  }) ?? []

  const label = titles.map((title) => title.description).join(", ");

  return (
      <Card className="flex flex-col p-4">
        <CardHeader className="items-center pb-0">
                      <div >
            {titles.map((title) => (
              <ChartItem key={title.id} title={title}/>
            ))}
          </div>
        </CardHeader>
        <CardContent>

          <HistoryChart chartData={chartData} tooltipLabel={label}/>
        </CardContent>
      </Card>
  );
};