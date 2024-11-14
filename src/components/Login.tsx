"use client";

import { login } from "@/lib/auth";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface LoginTipsProps {
  className?: string;
}

export function Login({ className }: LoginTipsProps) {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const entrar = async () => {
    await login({ email, senha });
    setEmail("");
    setSenha("");
  };

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
            <Label htmlFor="password">Email</Label>
            <Input
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
            />
          </div>
          <Button onClick={entrar} className="w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
