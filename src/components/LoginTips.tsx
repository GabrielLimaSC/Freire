import { User } from "@nextui-org/react";

interface LoginTipsProps {
  className?: string;
}

export function LoginTips({ className }: LoginTipsProps) {
  return (
    <div
      className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-10 ${className}`}
    >
      <div className="flex flex-col h-full">
        <h1 className="text-xl mb-20">freire.app</h1>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-5">
            <h1 className="text-4xl font-semibold">
              Gestão eficiente, futuro brilhante. Simplifique hoje para alcançar
              o amanhã.
            </h1>
            <p className="text-zinc-400">
              Uma plataforma inteligente para gestão acadêmica: organize e
              acompanhe o desempenho de estudantes, professores e coordenadores
              com eficiência, simplificando a administração universitária.
            </p>
          </div>
          <div className="rounded-xl bg-blue-900 shadow-lg p-10 flex flex-col space-y-5 items-start">
            <p className="text-lg">
              &quot;Educação não transforma o mundo. Educação muda pessoas.
              Pessoas transformam o mundo.&quot;
            </p>
            <User
              name="Paulo Freire"
              description="Filósofo e educador brasileiro"
              avatarProps={{
                src: "https://imgs.search.brave.com/6BR1oL78Z8JU_n58fiDlb4Ee2qqcq0SLsleDILydXL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2JlL1Bh/dWxvX0ZyZWlyZV8x/OTc3LmpwZy81MTJw/eC1QYXVsb19GcmVp/cmVfMTk3Ny5qcGc",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
