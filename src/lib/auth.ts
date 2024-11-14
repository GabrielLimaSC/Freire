export class Auth {
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

    console.log("Credencias recebidas: ", email, senha);

    const validarCredenciais = this.validarCredenciais(email, senha);

    if (!validarCredenciais) {
      return {
        error: true,
        emailError: "Email inválido.",
        senhaError: "Senha inválida.",
      };
    }

    return {
      error: false,
    };
  }

  static login(auth: { email: string; senha: string }) {
    const usuario = this.pegarUsuario(auth);

    return usuario;
  }
}
