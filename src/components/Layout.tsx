import { Link } from "react-router-dom";
import styles from "../styles/Layout.module.css";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      {/* Sidebar à esquerda */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Sistema Acadêmico</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aluno">Aluno</Link></li>
            <li><Link to="/professor">Professor</Link></li>
            <li><Link to="/documento">Documento</Link></li>
            <li><Link to="/disciplina">Disciplina</Link></li>
            <li><Link to="/turma">Turma</Link></li>
            <li><Link to="/curso">Curso</Link></li>
            <li><Link to="/avaliacao">Avaliação</Link></li>
            <li><Link to="/pagamento">Pagamento</Link></li>
            <li><Link to="/matricula">Matrícula</Link></li>
            <li><Link to="/faculdades">Faculdades</Link></li>
            <li><Link to="/relatorio">Relatório</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo central */}
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}