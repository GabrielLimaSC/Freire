import { GraduationCap } from "lucide-react";

interface Props {
  className?: string;
}

export function Block({ className }: Props) {
  return (
    <div
      className={`p-3 ${className} flex justify-center items-center border rounded-xl space-x-5 w-fit`}
    >
      <div className=" rounded-xl bg-blue-600 p-2 text-xl">
        <GraduationCap size={"2rem"} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">20</h1>
        <p className="text-sm text-zinc-300">Disciplinas matriculadas</p>
      </div>
    </div>
  );
}
