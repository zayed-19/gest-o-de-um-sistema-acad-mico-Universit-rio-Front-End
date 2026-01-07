import styles from "../styles/Aluno.module.css";
import Card from "../components/Card";
import { Search, Plus, Users } from "lucide-react";

export default function Aluno() {
  const alunos = [
    {
      matricula: "2023001",
      nome: "Carlos Eduardo Rocha",
      curso: "Engenharia de Software",
      semestre: "3º Semestre",
      disciplinas: 5,
      status: "Ativo",
    },
    {
      matricula: "2023002",
      nome: "Ana Paula Mendes",
      curso: "Direito",
      semestre: "5º Semestre",
      disciplinas: 4,
      status: "Ativo",
    },
    {
      matricula: "2023003",
      nome: "João Victor Silva",
      curso: "Administração",
      semestre: "2º Semestre",
      disciplinas: 6,
      status: "Ativo",
    },
    {
      matricula: "2023004",
      nome: "Mariana Costa Lopes",
      curso: "Psicologia",
      semestre: "7º Semestre",
      disciplinas: 3,
      status: "Trancado",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.headerPage}>
        <div className={styles.headerIcon}>
          <Users size={22} />
        </div>
        <div className={styles.headerText}>
          <h1>Alunos</h1>
          <p>Gerencie os alunos matriculados na instituição</p>
        </div>
      </div>

      {/* Estatísticas gerais */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Alunos</h4>
          <strong>{alunos.length}</strong>
        </div>

        <div className={`${styles.statCard} ${styles.cursos}`}>
          <h4>Cursos Ativos</h4>
          <strong>4</strong>
        </div>

        <div className={`${styles.statCard} ${styles.disciplinas}`}>
          <h4>Disciplinas Cursadas</h4>
          <strong>18</strong>
        </div>

        <div className={`${styles.statCard} ${styles.ativos}`}>
          <h4>Alunos Ativos</h4>
          <strong>3</strong>
        </div>
      </div>

      {/* Busca */}
      <div className={styles.buscaCard}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar aluno por nome, matrícula ou curso..."
          />
        </div>

        <button className={styles.novoBtn}>
          <Plus size={18} />
          Novo Aluno
        </button>
      </div>

      {/* Grid de alunos */}
      <Card>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Matrícula</th>
              <th>Valor</th>
              <th>Vencimento</th>
              <th>Status</th>
              <th>Pagamento</th>
              <th>Método</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ana Silva Santos</td>
              <td>2024001</td>
              <td className={styles.valor}>Kz 1.250,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pago}`}>Pago</span>
              </td>
              <td>08/12/2024</td>
              <td>Express</td>
            </tr>

            <tr>
              <td>Carlos Eduardo Lima</td>
              <td>2024002</td>
              <td className={styles.valor}>Kz 980,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pendente}`}>
                  Pendente
                </span>
              </td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td>Beatriz Oliveira Costa</td>
              <td>2024003</td>
              <td className={styles.valor}>Kz 1.450,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pago}`}>Pago</span>
              </td>
              <td>05/12/2024</td>
              <td>Cartão de Crédito</td>
            </tr>

            <tr>
              <td>Daniel Ferreira Souza</td>
              <td>2024004</td>
              <td className={styles.valor}>Kz 2.100,00</td>
              <td>05/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.atrasado}`}>
                  Atrasado
                </span>
              </td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td>Fernanda Martins Rocha</td>
              <td>2024005</td>
              <td className={styles.valor}>Kz 1.180,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pago}`}>Pago</span>
              </td>
              <td>09/12/2024</td>
              <td>Boleto</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>
  );
}
