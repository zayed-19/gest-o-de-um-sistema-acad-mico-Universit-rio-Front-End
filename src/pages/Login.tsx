import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";

type Usuario = {
  email: string;
  senha: string;
};

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [erro, setErro] = useState("");

  function getUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem("usuarios") || "[]");
  }

  function salvarUsuarios(usuarios: Usuario[]) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    const usuarios = getUsuarios();

    if (modo === "cadastro") {
      const existe = usuarios.find((u) => u.email === email);
      if (existe) {
        setErro("Este email já está cadastrado");
        return;
      }

      usuarios.push({ email, senha });
      salvarUsuarios(usuarios);
      alert("Cadastro realizado com sucesso!");
      setModo("login");
      return;
    }

    // LOGIN
    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuario) {
      setErro("Email ou senha inválidos");
      return;
    }

    navigate("/app");
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
          onClick={() =>
            setModo(modo === "login" ? "cadastro" : "login")
          }
        >
          {modo === "login"
            ? "Não tem conta? Cadastre-se"
            : "Já tem conta? Entrar"}
        </span>
      </form>
    </div>
  );
}
