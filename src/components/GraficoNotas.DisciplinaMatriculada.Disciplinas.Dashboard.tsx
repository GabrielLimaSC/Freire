"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CircleDashed } from "lucide-react";
const chartData = [
  { descricao: "Primeira avaliação", nota: 10 },
  { descricao: "Segunda avaliação", nota: 5 },
];

const chartConfig = {
  nota: {
    label: "nota",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function GraficoNotas() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notas das suas avaliações</CardTitle>
        <CardDescription>
          Exibindo todas as notas das avaliações da disciplina
        </CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-5">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="descricao"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="nota"
              type="natural"
              fill="var(--color-nota)"
              fillOpacity={0.4}
              stroke="var(--color-nota)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
        <div>
          <div className="flex flex-col text-sm space-y-2 border rounded-xl p-2">
            <div className="flex justify-center items-center space-x-2">
              <CircleDashed size={"0.5rem"} />
              <h1>Primeira avaliação: 10</h1>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <CircleDashed size={"0.5rem"} />
              <h1>Primeira avaliação: 10</h1>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <CircleDashed size={"0.5rem"} />
              <h1>Primeira avaliação: 10</h1>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
