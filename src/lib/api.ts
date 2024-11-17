import axios from "axios";
import { Aula } from "@/types/aula.type";
import { Avaliacao } from "@/types/avaliacao.type";
import { Disciplina } from "@/types/disciplina.type";
import { Fatura } from "@/types/fatura.type";
import { Falta } from "@/types/faltas.type";
import { Streak } from "@/types/streak.type";
import { Rendimento } from "@/types/rendimento.type";
import { qntdAlunos } from "@/types/qntdAlunos.type";

export class Api {
  private static readonly baseUrl = "https://api.freire.app/api";

  static async autenticar(email: string, senha: string) {
    try {
      const response = await axios.post(
        this.baseUrl + "/pessoas/autenticar",
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
        this.baseUrl + `/aluno/${id}/aulas-hoje`,
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

  static async pegarStreakAluno(id: number): Promise<Streak | null> {
    try {
      const response = await axios.get<Streak>(
        this.baseUrl + `/aluno/${id}/streak`,
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

  static async pegarRendimentoAluno(id: number): Promise<Rendimento | null> {
    try {
      const response = await axios.get<Rendimento>(
        this.baseUrl + `/aluno/${id}/rendimento`,
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

  static async pegarDisciplinas(id: number): Promise<Disciplina[] | null> {
    try {
      const response = await axios.get<Disciplina[]>(
        this.baseUrl + `/aluno/${id}/disciplinas`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("PEGAR DISCIPLINAS Resposta da API recebida:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
      return null;
    }
  }

  static async pegarFaturas(id: number): Promise<Fatura[] | null> {
    try {
      const response = await axios.get<Fatura[]>(
        this.baseUrl + `/aluno/${id}/financeiro`,
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

  static async pegarFaltas(idDisciplina: number): Promise<Falta | null> {
    try {
      const response = await axios.get<Falta>(
        this.baseUrl + `/aluno/${idDisciplina}/faltas`,
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
        this.baseUrl + `/aluno/${id}/avaliacao`,
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

  static async pegarAvaliacoesPorIdDaDisciplina(
    idAluno: number,
    idDisciplina: number
  ): Promise<Avaliacao[] | null> {
    try {
      const response = await axios.get<Avaliacao[]>(
        this.baseUrl + `/aluno/${idAluno}/avaliacao/${idDisciplina}`,
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

  static async pegarFaltasPorIdDaDisciplina(
    idAluno: number,
    idDisciplina: number
  ): Promise<Falta | null> {
    try {
      const response = await axios.get<Falta>(
        this.baseUrl + `/aluno/${idAluno}/faltas/${idDisciplina}`,
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

  static async pegarQntdAlunosPorIdDaDisciplina(
    idProfessor: number
  ): Promise<qntdAlunos | null> {
    try {
      const response = await axios.get<qntdAlunos>(
        this.baseUrl + `/professor/${idProfessor}/qtd-alunos`,
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
