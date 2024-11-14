"use client";

import { Auth } from "@/lib/auth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

interface LoginTipsProps {
  className?: string;
}

export function Login({ className }: LoginTipsProps) {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [senhaError, setSenhaError] = useState<string>("");

  const entrar = async () => {
    const auth = await Auth.login({ email, senha });

    setEmail("");
    setSenha("");

    if (auth.error) {
      setEmailError(auth.emailError || "");
      setSenhaError(auth.senhaError || "");
    }

    setEmailError("");
    setSenhaError("");
  };

  return (
    <div
      className={`rounded-md p-10 ${className} flex flex-col justify-center items-center`}
    >
      <div className="w-2/4">
        <div className="mb-16 flex flex-col items-left">
          <h1 className="text-3xl font-semibold mb-2">
            Seja bem-vindo(a) de volta
          </h1>
          <p>Digite seu email e sua senha para continuar.</p>
        </div>
        <div className="w-full flex flex-col space-y-5">
          <div className="space-y-2">
            <Input
              label="Email"
              labelPlacement="outside"
              placeholder="Digite seu email"
              size="lg"
              value={email}
              onValueChange={(valor) => setEmail(valor)}
              type="email"
              variant="faded"
              isInvalid={emailError ? true : false}
              errorMessage={emailError}
            />
          </div>
          <div className="space-y-2">
            <Input
              label="Senha"
              labelPlacement="outside"
              placeholder="Digite sua senha"
              size="lg"
              value={senha}
              onValueChange={(valor) => setSenha(valor)}
              type="password"
              variant="faded"
              isInvalid={senhaError ? true : false}
              errorMessage={senhaError}
            />
          </div>
          <Button onClick={entrar} variant="faded" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
