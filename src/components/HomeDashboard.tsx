import { Block } from "./Block";
import { TabelaRendimento } from "./TabelaRendimento";
import { CalendarioDashboard } from "./CalendarioDashboard";

interface Props {
  className?: string;
}

export function HomeDashboard({ className }: Props) {
  return (
    <div className={`${className} w-full`}>
      <div className="w-full flex space-x-5">
        <div className="space-y-5 w-full">
          <div className="flex justify-between w-full">
            <Block />
            <Block />
            <Block />
          </div>
          <TabelaRendimento />
        </div>
        <CalendarioDashboard />
      </div>
    </div>
  );
}
