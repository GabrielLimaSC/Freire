"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

class Auth {
  private static usuarios: { email: string; senha: string }[] = [
    {
      email: "claudioalvesoficial@gmail.com",
      senha: "PkFTWD7BR9UktnWBztUWUCYyuZvaGRva",
    },
  ];

  constructor() {}

  static validarCredenciais(email: string, senha: string) {
    if (
      email === "claudioalvesoficial@gmail.com" &&
      senha === "PkFTWD7BR9UktnWBztUWUCYyuZvaGRva"
    ) {
      return true;
    }
    return false;
  }

  static async pegarUsuario(auth: { email: string; senha: string }) {
    const { email, senha } = auth;

    const usuario = Auth.usuarios.find(
      (e) => e.email === email && e.senha === senha
    );

    if (!usuario) {
      return null;
    }

    return usuario;
  }
}
export async function login(auth: { email: string; senha: string }) {
  const { email, senha } = auth;

  const validarCredenciais = Auth.validarCredenciais(email, senha);

  if (!validarCredenciais) {
    return {
      error: true,
      emailError: "Email inválido.",
      senhaError: "Senha inválida.",
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("email", auth.email);
  cookieStore.set("senha", auth.senha);

  redirect("/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("email");
  cookieStore.delete("senha");

  redirect("/");
}

export async function pegarSessao() {
  const cookieStore = await cookies();

  const email = cookieStore.get("email")?.value;
  const senha = cookieStore.get("senha")?.value;

  const usuarioAtivo = await Auth.pegarUsuario({
    email: email || "",
    senha: senha || "",
  });

  if (!usuarioAtivo) {
    return false;
  }

  return true;
}
