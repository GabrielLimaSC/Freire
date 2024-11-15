import { Aula } from "@/types/aula.type";

export class Api {
  static async autenticar(email: string, senha: string) {
    const response = await fetch(
      "https://api.freire.app/api/pessoas/autenticar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      }
    );

    if (response.status != 200) {
      return null;
    }

    return await response.json();
  }

  static async pegarAulasDoDia(id: number): Promise<Aula[] | null> {
    const response = await fetch(
      `https://api.freire.app/api/aluno/${id}/aula-hoje`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);

    if (response.status != 200) {
      return null;
    }

    return [];
  }
}
