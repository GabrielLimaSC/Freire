import { useEffect, useState } from "react";
import { DisciplinaMatriculada } from "./DisciplinaMatriculada.Disciplinas.Dashboard";
import { usePessoaContext } from "@/contexts/pessoa-context";
import { Api } from "@/lib/api";
import { Disciplina } from "@/types/disciplina.type";
import { Pessoa } from "@/types/pessoa.type";
import { LoaderCircle } from "lucide-react";

interface Props {
  className?: string;
  pessoa: Pessoa;
}

export function DisciplinasDashboard({ className, pessoa }: Props) {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [rendimento, setRedimento] = useState<string>("0");

  useEffect(() => {
    const fetchDisciplinas = async () => {
      if (pessoa?.idPessoa) {
        const retornoDisciplinas = await Api.pegarDisciplinas(pessoa?.idPessoa);
        const retornoRendimento = await Api.pegarRendimentoAluno(
          pessoa?.idPessoa
        );

        if (retornoDisciplinas && retornoRendimento) {
          setDisciplinas(retornoDisciplinas);
          setRedimento(retornoRendimento.rendimento?.toFixed(2));
        }
      }
    };

    fetchDisciplinas();
  }, [pessoa?.idPessoa]);

  if (disciplinas?.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <LoaderCircle size={"5rem"} className="animate-spin text-muted" />
      </div>
    );
  }

  return (
    <div className={`${className} w-full space-y-5`}>
      <div className="border rounded-xl w-full px-12 py-10 flex justify-between">
        <h1 className="text-2xl font-semibold">Coeficiente de Rendimento</h1>
        <h1 className="text-2xl font-semibold">{rendimento}</h1>
      </div>
      <div className="flex flex-col space-y-5">
        {disciplinas &&
          disciplinas.map((disciplina) => (
            <DisciplinaMatriculada
              key={disciplina.id_disciplina}
              idDisciplina={disciplina.id_disciplina}
              nomeDisciplina={disciplina.disciplina}
              nomeProfessor={disciplina.professor}
              idPessoa={pessoa?.idPessoa}
            />
          ))}
      </div>
    </div>
  );
}
