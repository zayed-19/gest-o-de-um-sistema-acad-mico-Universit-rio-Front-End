import styles from "../styles/Disciplina.module.css";
import Card from "../components/Card";
import {
  BookOpen,
  Pencil,
  Trash2,
  Search,
  Plus,
  Clock,
  Users,
  Layers,
} from "lucide-react";

export default function Disciplina() {
  const disciplinas = [
    {
      codigo: "ENG001",
      nome: "Algoritmos e Estruturas de Dados",
      curso: "Engenharia de Software",
      cargaHoraria: "80h",
      creditos: 4,
      alunos: 45,
      professor: "Dr. João Pedro Almeida",
    },
    {
      codigo: "DIR001",
      nome: "Direito Constitucional",
      curso: "Direito",
      cargaHoraria: "60h",
      creditos: 3,
      alunos: 38,
      professor: "Dra. Maria Fernanda Costa",
    },
    {
      codigo: "ADM001",
      nome: "Gestão de Pessoas",
      curso: "Administração",
      cargaHoraria: "60h",
      creditos: 3,
      alunos: 42,
      professor: "Me. Roberto Carlos Santos",
    },
    {
      codigo: "PSI001",
      nome: "Psicologia do Desenvolvimento",
      curso: "Psicologia",
      cargaHoraria: "80h",
      creditos: 4,
      alunos: 35,
      professor: "Dra. Ana Paula Rodrigues",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.headerPage}>
        <div className={styles.headerIcon}>
          <Layers size={22} />
        </div>
        <div className={styles.headerText}>
          <h1>Disciplinas</h1>
          <p>Gerencie as disciplinas oferecidas pela instituição</p>
        </div>
      </div>

      {/* Estatísticas gerais */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Disciplinas</h4>
          <strong>{disciplinas.length}</strong>
        </div>

        <div className={`${styles.statCard} ${styles.carga}`}>
          <h4>Carga Horária Total</h4>
          <strong>400h</strong>
        </div>

        <div className={`${styles.statCard} ${styles.creditos}`}>
          <h4>Total de Créditos</h4>
          <strong>20</strong>
        </div>

        <div className={`${styles.statCard} ${styles.alunos}`}>
          <h4>Alunos Matriculados</h4>
          <strong>210</strong>
        </div>
      </div>

      {/* Busca */}
      <div className={styles.buscaCard}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar disciplina por código, nome ou professor..."
          />
        </div>

        <button className={styles.novoBtn}>
          <Plus size={18} />
          Nova Disciplina
        </button>
      </div>

      {/* Grid de disciplinas */}
      <div className={styles.grid}>
        {disciplinas.map((disciplina) => (
          <Card key={disciplina.codigo} className={styles.card}>
            {/* Cabeçalho do card */}
            <div className={styles.cardHeader}>
              <div className={styles.cardLeft}>
                <div className={styles.icon}>
                  <BookOpen size={20} />
                </div>

                <div>
                  <span className={styles.codigo}>{disciplina.codigo}</span>
                  <h3 className={styles.titulo}>{disciplina.nome}</h3>
                  <p className={styles.curso}>{disciplina.curso}</p>
                </div>
              </div>

              <div className={styles.acoes}>
                <Pencil size={18} className={styles.editar} />
                <Trash2 size={18} className={styles.excluir} />
              </div>
            </div>

            {/* Estatísticas do card */}
            <div className={styles.cardStats}>
              <div className={styles.stat}>
                <Clock size={16} />
                <span>Carga Horária</span>
                <strong>{disciplina.cargaHoraria}</strong>
              </div>

              <div className={styles.stat}>
                <span>Créditos</span>
                <strong>{disciplina.creditos}</strong>
              </div>

              <div className={styles.stat}>
                <Users size={16} />
                <span>Alunos</span>
                <strong>{disciplina.alunos}</strong>
              </div>
            </div>

            {/* Professor */}
            <div className={styles.professor}>
              <span>Professor Responsável</span>
              <strong>{disciplina.professor}</strong>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
