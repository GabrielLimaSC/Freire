import { BookText } from "lucide-react";

interface Props {
  disciplina: string;
  horaInicio: string;
  horaFim: string;
}

export function BlockCalendarioDashboard({
  disciplina,
  horaInicio,
  horaFim,
}: Props) {
  return (
    <div className="p-3 flex justify-start items-center border rounded-xl space-x-5 w-full">
      <div className="rounded-xl bg-blue-600 p-2 text-xl">
        <BookText />
      </div>
      <div>
        <h1 className="font-bold">{disciplina}</h1>
        <p className="text-sm text-muted-foreground">
          {horaInicio} - {horaFim}
        </p>
      </div>
    </div>
  );
}
