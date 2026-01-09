import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Sistema Acadêmico</h2>

        <nav>
          <ul>
            <li>
              <Link to="/app">Aluno</Link>
            </li>
            <li>
              <Link to="/app/professor">Professor</Link>
            </li>
            <li>
              <Link to="/app/documento">Documento</Link>
            </li>
            <li>
              <Link to="/app/disciplina">Disciplina</Link>
            </li>
            <li>
              <Link to="/app/turma">Turma</Link>
            </li>
            <li>
              <Link to="/app/curso">Curso</Link>
            </li>
            <li>
              <Link to="/app/avaliacao">Avaliação</Link>
            </li>
            <li>
              <Link to="/app/pagamento">Pagamento</Link>
            </li>
            <li>
              <Link to="/app/matricula">Matrícula</Link>
            </li>
            <li>
              <Link to="/app/faculdades">Faculdades</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
