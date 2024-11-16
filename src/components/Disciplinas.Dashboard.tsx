import { DisciplinaMatriculada } from "./DisciplinaMatriculada.Disciplinas.Dashboard";

interface Props {
  className?: string;
}

export function DisciplinasDashboard({ className }: Props) {
  return (
    <div className={`${className} w-full flex-col space-y-5`}>
      <DisciplinaMatriculada />
      <DisciplinaMatriculada />
      <DisciplinaMatriculada />
      <DisciplinaMatriculada />
    </div>
  );
}
