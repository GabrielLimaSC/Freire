"use client";

import { Alerta } from "@/components/Alerta";
import { SidebarDashboard } from "@/components/SideBar.dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PessoaContextProvider } from "@/contexts/pessoa-context";
import { SidebarContextProvider } from "@/contexts/sidebar-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PessoaContextProvider>
      <Alerta />
      <SidebarContextProvider>
        <SidebarProvider>
          <SidebarDashboard />
          <main className="w-full transition-all">
            <div className="w-full overflow-y-auto">{children}</div>
          </main>
        </SidebarProvider>
      </SidebarContextProvider>
    </PessoaContextProvider>
  );
}
