"use client";

import { usePessoaContext } from "@/contexts/pessoa-context";
import { Api } from "@/lib/api";
import { Cadeira } from "@/types/cadeira.type";
import { GraduationCap, Landmark } from "lucide-react";
import { useEffect, useState } from "react";

export function QuantidadeFaturas() {
  // const { pessoa } = usePessoaContext();

  // const [cadeiras, setCadeiras] = useState<Cadeira[]>([]);

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
    <div className="p-3 flex justify-center items-center border rounded-xl space-x-5 w-fit">
      <div className="rounded-xl bg-pink-600 p-2 text-xl">
        <Landmark size="2rem" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">3</h1>
        <p className="text-sm text-muted-foreground">Faturas pendentes</p>
      </div>
    </div>
  );
}
