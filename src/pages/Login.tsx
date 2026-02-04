import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";
import { login, register } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    try {
      // CADASTRO
      if (modo === "cadastro") {
        await register({ email, senha });
        alert("Cadastro realizado com sucesso!");
        setModo("login");
        return;
      }

      // LOGIN
      const usuario = await login({ email, senha });

      // salva apenas o ID do usuário
      localStorage.setItem("usuarioId", usuario.id);

      navigate("/app");
    } catch (error: unknown) {
      setErro(error instanceof Error ? error.message : "Erro desconhecido");
    }
  }

  return (
    <div className={styles.containerlogin}>
      <form className={styles.cardtext} onSubmit={handleSubmit}>
        <h1>Sistema Acadêmico</h1>
        <p>
          {modo === "login"
            ? "Acesse sua conta"
            : "Crie sua conta gratuitamente"}
        </p>

        {erro && <span className={styles.erro}>{erro}</span>}

        <div className={styles.inputGroup}>
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <Lock size={18} />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {modo === "login" ? <LogIn size={18} /> : <UserPlus size={18} />}
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <span
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#4f46e5",
            cursor: "pointer",
          }}
          onClick={() => setModo(modo === "login" ? "cadastro" : "login")}
        >
          {modo === "login"
            ? "Não tem conta? Cadastre-se"
            : "Já tem conta? Entrar"}
        </span>
      </form>
    </div>
  );
}
