"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
import { useEffect, useState } from "react";
import { usePessoaContext } from "@/contexts/pessoa-context";
import { Api } from "@/lib/api";
import { Avaliacao } from "@/types/avaliacao.type";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function TabelaRendimento() {
  const { pessoa } = usePessoaContext();
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  useEffect(() => {
    const pegarAvaliacoes = async () => {
      if (pessoa?.idPessoa) {
        const avaliacoes = await Api.pegarAvaliacoes(pessoa?.idPessoa);

        if (avaliacoes) {
          setAvaliacoes(avaliacoes);
        }
      }
    };

    pegarAvaliacoes();
  }, [pessoa?.idPessoa]);

  const calcularMediaAvaliacoes = (avaliacoes: Avaliacao[]) => {
    const mediaAvaliacoes: { [key: string]: { total: number; count: number } } =
      {};

    avaliacoes.forEach((avaliacao) => {
      if (!mediaAvaliacoes[avaliacao.cadeira]) {
        mediaAvaliacoes[avaliacao.cadeira] = { total: 0, count: 0 };
      }
      mediaAvaliacoes[avaliacao.cadeira].total += avaliacao.nota;
      mediaAvaliacoes[avaliacao.cadeira].count += 1;
    });

    return Object.keys(mediaAvaliacoes).map((cadeira) => ({
      cadeira,
      media: mediaAvaliacoes[cadeira].total / mediaAvaliacoes[cadeira].count,
    }));
  };

  const chartData = calcularMediaAvaliacoes(avaliacoes);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seu rendimento</CardTitle>
        <CardDescription>
          Sua média de rendimento das disciplinas matriculadas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="cadeira"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="media" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
