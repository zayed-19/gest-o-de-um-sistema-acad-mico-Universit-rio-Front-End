import styles from "../styles/Aluno.module.css";
import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";

export default function Aluno() {
  return (
    <section className={styles.container}>
      <Titulo texto="Gestão de Alunos" />

      {/* Estatísticas */}
      <Card>
        <div className={styles.stats}>
          <Estatistica label="Total de Alunos" valor="5" />
          <Estatistica label="Ativos" valor="5" />
          <Estatistica label="Novos este mês" valor="12" />
          <Estatistica label="Formandos" valor="8" />
        </div>
      </Card>

      {/* Barra de busca */}
      <Card>
        <div className={styles.busca}>
          <input
            type="text"
            placeholder="Buscar aluno por nome, matrícula ou curso..."
          />
          <Botao texto="+ Novo Aluno" />
        </div>
      </Card>

      {/* Tabela de alunos */}
      <Card>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Período</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024001</td>
              <td>Ana Silva Santos</td>
              <td>Engenharia de Software</td>
              <td>4º</td>
              <td>
                ana.silva@email.com<br />
                (11) 98765-4321
              </td>
              <td>✏️ 🗑️</td>
            </tr>
            <tr>
              <td>2024002</td>
              <td>Carlos Eduardo Lima</td>
              <td>Administração</td>
              <td>2º</td>
              <td>
                carlos.lima@email.com<br />
                (21) 97654-3210
              </td>
              <td>✏️ 🗑️</td>
            </tr>
            {/* ... demais alunos */}
          </tbody>
        </table>
      </Card>
    </section>
  );
}