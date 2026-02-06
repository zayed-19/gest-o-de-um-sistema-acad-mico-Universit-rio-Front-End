import { useState } from "react";
import styles from "../styles/Aluno.module.css";
import Card from "../components/Card";
import { Search, Plus, Users, Pencil, Trash2 } from "lucide-react";
import { AlunoForm } from "../components/AlunoForm";
import { AlunoList } from "../components/AlunoList";

export default function Aluno() {
  const [abrirModal, setAbrirModal] = useState(false);
  const [refresh, setRefresh] = useState(0);

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

      {/* Estatísticas */}
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

        <button className={styles.novoBtn} onClick={() => setAbrirModal(true)}>
          <Plus size={18} />
          Novo Aluno
        </button>
      </div>

      {/* Tabela de alunos fictícios */}
      <Card>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Matrícula</th>
              <th>Curso</th>
              <th>Período</th>
              <th>Contacto</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={index}>
                <td>{aluno.nome}</td>
                <td>{aluno.matricula}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.semestre}</td>
                <td>
                  email@exemplo.com
                  <p>(99) 99999-9999</p>
                </td>
                <td>
                  <div className={styles.acoes}>
                    <Pencil size={18} className={styles.editar} />
                    <Trash2 size={18} className={styles.excluir} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Lista REAL do backend */}
      <Card>
        <h3 style={{ marginBottom: "10px" }}>Alunos Cadastrados</h3>
        <AlunoList refresh={refresh} />
      </Card>

      {/* Modal com botão SAIR */}
      {abrirModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Novo Aluno</h2>

              <button
                className={styles.btnSair}
                onClick={() => setAbrirModal(false)}
              >
                Sair
              </button>
            </div>

            <AlunoForm
              onAlunoAdded={() => {
                setAbrirModal(false);
                setRefresh(refresh + 1);
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
