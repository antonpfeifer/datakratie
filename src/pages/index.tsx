import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { BudgetChart } from "~/components/budget_chart";
import { BudgetPieChart } from "~/components/budget_piechart";
import { ChartLineInteractive } from "~/components/line_chart";
import { TitlesSearch } from "~/components/titles_search";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { useState, type Title } from "~/hooks/useState";
import { api } from "~/utils/api";

export default function Home() {
  const titles = useState((state) => state.titles)


  return (
    <>
      <Head>
        <title>Datakratie</title>
        <meta name="description" content="Line chart dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-6">
        <div className="w-full max-w-5xl">
          <BudgetPieChart itemId={14}></BudgetPieChart>
          <TitlesSearch></TitlesSearch>
          <BudgetChartCard titles={titles}></BudgetChartCard>
        </div>
      </main>
    </>
  );
}

const BudgetChartCard = ({
  titles
} : {titles: Array<Title>}) => {
  const chartQuery = api.values.byTitles.useQuery({titles: titles.map((title) => title.id)});

  const chartData = chartQuery.data?.map((entry) => {
    return {date: entry.date.toISOString(), value: Number(entry.value)}
  }) ?? []

  const label = titles.map((title) => title.description).join(", ");

  return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
            <CardTitle>{label}</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <BudgetChart chartData={chartData} tooltipLabel={label}/>
        </CardContent>
      </Card>
  );
};
