import styles from "../styles/Matricula.module.css";
import Card from "../components/Card";
import {
  ClipboardList,
  Pencil,
  Trash2,
  Search,
  Plus,
  User,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function Matricula() {
  const matriculas = [
    {
      codigo: "MAT001",
      aluno: "Ana Silva Santos",
      curso: "Engenharia de Software",
      disciplina: "Algoritmos e Estruturas de Dados",
      ano: "2024",
      status: "Ativa",
    },
    {
      codigo: "MAT002",
      aluno: "Carlos Eduardo Lima",
      curso: "Administração",
      disciplina: "Gestão de Pessoas",
      ano: "2024",
      status: "Ativa",
    },
    {
      codigo: "MAT003",
      aluno: "João Manuel Costa",
      curso: "Direito",
      disciplina: "Direito Constitucional",
      ano: "2024",
      status: "Cancelada",
    },
    {
      codigo: "MAT004",
      aluno: "Maria Fernanda Rocha",
      curso: "Psicologia",
      disciplina: "Psicologia do Desenvolvimento",
      ano: "2024",
      status: "Ativa",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.headerPage}>
        <div className={styles.headerIcon}>
          <ClipboardList size={22} />
        </div>
        <div className={styles.headerText}>
          <h1>Matrículas</h1>
          <p>Gerencie as matrículas dos alunos nas disciplinas</p>
        </div>
      </div>

      {/* Estatísticas */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Matrículas</h4>
          <strong>{matriculas.length}</strong>
        </div>

        <div className={`${styles.statCard} ${styles.ativas}`}>
          <h4>Matrículas Ativas</h4>
          <strong>3</strong>
        </div>

        <div className={`${styles.statCard} ${styles.canceladas}`}>
          <h4>Canceladas</h4>
          <strong>1</strong>
        </div>

        <div className={`${styles.statCard} ${styles.alunos}`}>
          <h4>Alunos Matriculados</h4>
          <strong>4</strong>
        </div>
      </div>

      {/* Busca */}
      <div className={styles.buscaCard}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar por aluno, curso ou disciplina..."
          />
        </div>

        <button className={styles.novoBtn}>
          <Plus size={18} />
          Nova Matrícula
        </button>
      </div>

      {/* Grid de matrículas */}
      <div className={styles.grid}>
        {matriculas.map((matricula) => (
          <Card key={matricula.codigo} className={styles.card}>
            {/* Cabeçalho do card */}
            <div className={styles.cardHeader}>
              <div className={styles.cardLeft}>
                <div className={styles.icon}>
                  <User size={20} />
                </div>

                <div>
                  <span className={styles.codigo}>{matricula.codigo}</span>
                  <h3 className={styles.titulo}>{matricula.aluno}</h3>
                  <p className={styles.curso}>{matricula.curso}</p>
                </div>
              </div>

              <div className={styles.acoes}>
                <Pencil size={18} className={styles.editar} />
                <Trash2 size={18} className={styles.excluir} />
              </div>
            </div>

            {/* Detalhes */}
            <div className={styles.cardStats}>
              <div className={styles.stat}>
                <BookOpen size={16} />
                <span>Disciplina</span>
                <strong>{matricula.disciplina}</strong>
              </div>

              <div className={styles.stat}>
                <Calendar size={16} />
                <span>Ano</span>
                <strong>{matricula.ano}</strong>
              </div>

              <div className={styles.stat}>
                <span>Status</span>
                <strong>{matricula.status}</strong>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
