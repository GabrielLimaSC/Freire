"use client";

import { HomeDashboard } from "@/components/Home.Dashboard";
import { usePessoaContext } from "@/contexts/pessoa-context";
import { useSidebarContext } from "@/contexts/sidebar-context";
import { LoaderCircle } from "lucide-react";

export default function Dashboard() {
  const { selectedButton } = useSidebarContext();
  const { pessoa } = usePessoaContext();

  if (!pessoa) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <LoaderCircle size={"5rem"} className="animate-spin text-muted" />
      </div>
    );
  }

  return (
    <div className="p-10 w-full space-y-5 animate-fade animate-once animate-duration-5000 animate-ease-in-out">
      <div>
        <h1 className="text-2xl font-bold">{selectedButton}</h1>
        <p>Seja bem-vindo(a) de volta, {pessoa?.nome.split(" ")[0]}!</p>
      </div>
      {selectedButton === "Home" && <HomeDashboard />}
    </div>
  );
}
