"use client";

import { HomeDashboard } from "@/components/HomeDashboard";
import { usePessoaContext } from "@/contexts/pessoa-context";
import { useSidebarContext } from "@/contexts/sidebar-context";

export default function Dashboard() {
  const { selectedButton } = useSidebarContext();
  const { pessoa } = usePessoaContext();

  return (
    <div className="p-10 w-full space-y-5">
      <div>
        <h1 className="text-2xl font-bold">{selectedButton}</h1>
        <p>Seja bem-vindo(a) de volta, {pessoa?.nome.split(" ")[0]}!</p>
      </div>
      {selectedButton === "Home" && <HomeDashboard />}
    </div>
  );
}
