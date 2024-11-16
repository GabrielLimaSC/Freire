import axios from "axios";
import { Aula } from "@/types/aula.type";
import { Avaliacao } from "@/types/avaliacao.type";
import { Cadeira } from "@/types/cadeira.type";

export class Api {
  static async autenticar(email: string, senha: string) {
    try {
      const response = await axios.post(
        "https://api.freire.app/api/pessoas/autenticar",
        { email, senha },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro na autenticação:", error);
      return null;
    }
  }

  static async pegarAulasDoDia(id: number): Promise<Aula[] | null> {
    try {
      const response = await axios.get<Aula[]>(
        `https://api.freire.app/api/aluno/${id}/aulas-hoje`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
      return null;
    }
  }

  static async pegarCadeiras(id: number): Promise<Cadeira[] | null> {
    try {
      const response = await axios.get<Cadeira[]>(
        `https://api.freire.app/api/aluno/${id}/cadeiras`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Resposta da API recebida:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
      return null;
    }
  }

  static async pegarAvaliacoes(id: number): Promise<Avaliacao[] | null> {
    try {
      const response = await axios.get<Avaliacao[]>(
        `https://api.freire.app/api/aluno/${id}/avaliacao`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Resposta da API recebida:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
      return null;
    }
  }
}
