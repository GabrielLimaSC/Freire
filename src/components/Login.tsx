import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

interface LoginTipsProps {
  className?: string;
}

export function Login({ className }: LoginTipsProps) {
  return (
    <div
      className={`rounded-md p-10 ${className} flex flex-col justify-center items-center`}
    >
      <div className="w-2/4">
        <div className="mb-10 flex flex-col items-left">
          <h1 className="text-3xl font-semibold mb-2">
            Seja bem-vindo(a) de volta
          </h1>
          <p>Digite seu email e sua senha para continuar.</p>
        </div>
        <div className="w-full flex flex-col space-y-5">
          <div className="space-y-2">
            <h1 className="text-lg">Email</h1>
            <Input type="email" variant="faded" label="Digite seu email" />
          </div>
          <div className="space-y-2">
            <h1 className="text-lg">Email</h1>
            <Input type="password" variant="faded" label="Digite sua senha" />
          </div>
          <Button variant="faded" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
