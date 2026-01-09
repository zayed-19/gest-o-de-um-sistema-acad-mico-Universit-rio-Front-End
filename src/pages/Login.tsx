import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { Mail, Lock, LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // 🔐 Login mock (exemplo)
    if (email === "admin@admin.com" && senha === "123456") {
      navigate("/app"); // página principal após login
    } else {
      setErro("Email ou senha inválidos");
    }
  }

  return (
    <div className={styles.containerlogin}>
      <form className={styles.cardtext} onSubmit={handleLogin}>
        <h1>Sistema Acadêmico</h1>
        <p>Acesse sua conta</p>

        {erro && <span className={styles.erro}>{erro}</span>}

        <div className={styles.inputGroup}>
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email(admin@admin.com)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <Lock size={18} />
          <input
            type="password"
            placeholder="Senha(123456)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          <LogIn size={18} />
          Entrar
        </button>
      </form>
    </div>
  );
}
