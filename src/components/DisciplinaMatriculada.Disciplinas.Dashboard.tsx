import { useState } from "react";
import { Button } from "./ui/button";
import { GraduationCap } from "lucide-react";
import { Divisor } from "./ui/Divisor";
import { GraficoNotas } from "./GraficoNotas.DisciplinaMatriculada.Disciplinas.Dashboard";

interface Props {
  className?: string;
}

export function DisciplinaMatriculada({ className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className} w-full`}>
      <div className="w-full border rounded-xl py-10 px-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Banco de dados</h1>
            <div className="flex justify-start items-center space-x-1">
              <GraduationCap className="text-muted-foreground" size={"1rem"} />
              <h1 className="text-sm text-muted-foreground">
                Prof. José Carlos
              </h1>
            </div>
          </div>
          <div></div>
          <Button onClick={toggle} variant={"outline"}>
            {isExpanded ? "Ocultar" : "Ver mais"}
          </Button>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out flex flex-col space-y-10 ${
            isExpanded ? "max-h-96 mt-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Divisor />
          <div className="flex justify-between">
            <div className="border rounded-xl p-6 flex flex-col justify-between">
              <h1 className="text-lg">Média: 10</h1>
              <h1 className="text-lg">Faltas: 10</h1>
              <h1 className="text-lg">Média: 10</h1>
            </div>
            <GraficoNotas />
          </div>
        </div>
      </div>
    </div>
  );
}
