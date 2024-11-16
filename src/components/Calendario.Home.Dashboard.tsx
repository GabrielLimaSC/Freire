"use client";

import { useEffect, useState } from "react";
import { BlockCalendarioDashboard } from "./Aula.Calendario.Home.Dashboard";
import { Api } from "@/lib/api";
import { usePessoaContext } from "@/contexts/pessoa-context";
import { Aula } from "@/types/aula.type";
import { Divisor } from "./ui/Divisor";

export function CalendarioDashboard() {
  const { pessoa } = usePessoaContext();

  const data = {
    dia: new Date().getUTCDate(),
    mes: new Date().getUTCMonth(),
    diaSemana: new Date().getUTCDay(),
  };

  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const diaSemanaNome = diasSemana[data.diaSemana];
  const mesNome = meses[data.mes];

  const [aulas, setAulas] = useState<Aula[]>([]);

  useEffect(() => {
    const pegarAulas = async () => {
      if (pessoa?.idPessoa) {
        const aulas = await Api.pegarAulasDoDia(pessoa?.idPessoa);

        if (aulas) {
          setAulas(aulas);
        }
      }
    };

    pegarAulas();
  }, [pessoa?.idPessoa]);

  return (
    <div className="flex w-full border rounded-xl p-5">
      <div className="flex flex-col space-y-5 w-full">
        <div>
          <h1 className="text-xl font-semibold">
            {diaSemanaNome}, {data.dia} de {mesNome}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-muted-foreground text-sm">Hoje</p>
          <Divisor className="border-muted-foreground" />
        </div>
        {aulas.map((aula) => (
          <BlockCalendarioDashboard
            key={aula.cadeira}
            disciplina={aula.cadeira}
            horaInicio={aula.hora_inicio}
            horaFim={aula.hora_fim}
          />
        ))}
      </div>
    </div>
  );
}
