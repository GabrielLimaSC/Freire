"use client";

import { usePessoaContext } from "@/contexts/pessoa-context";
import { Api } from "@/lib/api";
import { Cadeira } from "@/types/cadeira.type";
import { Flame } from "lucide-react";
import { useEffect, useState } from "react";

export function PresencaStreak() {
  // const { pessoa } = usePessoaContext();

  // const [presencas, setPresencas] = useState<Cadeira[]>([]);

  // useEffect(() => {
  //   const pegarCadeiras = async () => {
  //     if (pessoa?.idPessoa) {
  //       const cadeiras = await Api.pegarCadeiras(pessoa?.idPessoa);

  //       if (cadeiras) {
  //         setCadeiras(cadeiras);
  //       }
  //     }
  //   };
  //   pegarCadeiras();
  // }, [pessoa?.idPessoa]);

  return (
    <div className="p-3 flex justify-center items-center border rounded-xl space-x-5 w-fit card-shine-effect">
      <div className="rounded-xl bg-orange-600 p-2 text-xl ">
        <Flame size={"2rem"} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">23</h1>
        <p className="text-sm text-muted-foreground">Sequência de presenças</p>
      </div>
    </div>
  );
}
