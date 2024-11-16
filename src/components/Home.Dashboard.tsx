import { QuantidadeCadeiras } from "./QuantidadeCadeiras.Home.Dashboard";
import { TabelaRendimento } from "./TabelaRendimento.Home.Dashboard";
import { CalendarioDashboard } from "./Calendario.Home.Dashboard";
import { PresencaStreak } from "./PresencaStreak.Home.Dashboard";
import { QuantidadeFaturas } from "./QuantidadeFaturas.Home.Dashboard";

interface Props {
  className?: string;
}

export function HomeDashboard({ className }: Props) {
  return (
    <div className={`${className} w-full`}>
      <div className="w-full flex space-x-5">
        <div className="space-y-5 w-full">
          <div className="flex justify-between items-center ">
            <QuantidadeCadeiras />
            <PresencaStreak />
            <QuantidadeFaturas />
          </div>
          <TabelaRendimento />
        </div>
        <CalendarioDashboard />
      </div>
    </div>
  );
}
