import styles from "../styles/Turmas.module.css";
import { Search, Users, Plus } from "lucide-react";
import Card from "../components/Card";

interface Turma {
  id: number;
  disciplina: string;
  codigo: string;
  periodo: string;
  horario: string;
  local: string;
  professor: string;
  ocupadas: number;
  total: number;
}

export default function Turmas() {
  const turmas: Turma[] = [
    {
      id: 1,
      disciplina: "Algoritmos e Estruturas de Dados",
      codigo: "ENG-2024-4A",
      periodo: "2024.2",
      horario: "Seg/Qua 19:00-21:00",
      local: "Lab 101",
      professor: "Dr. João Pedro Almeida",
      ocupadas: 45,
      total: 50,
    },
    {
      id: 2,
      disciplina: "Direito Constitucional",
      codigo: "DIR-2024-6B",
      periodo: "2024.2",
      horario: "Ter/Qui 14:00-16:00",
      local: "Sala 205",
      professor: "Dra. Maria Fernanda Costa",
      ocupadas: 38,
      total: 40,
    },
    {
      id: 3,
      disciplina: "Gestão de Pessoas",
      codigo: "ADM-2024-2A",
      periodo: "2024.2",
      horario: "Qua/Sex 20:00-22:00",
      local: "Sala 310",
      professor: "Me. Roberto Carlos Santos",
      ocupadas: 42,
      total: 45,
    },
    {
      id: 4,
      disciplina: "Psicologia do Desenvolvimento",
      codigo: "PSI-2024-5A",
      periodo: "2024.2",
      horario: "Seg/Qua 08:00-10:00",
      local: "Sala 110",
      professor: "Dra. Ana Paula Rodrigues",
      ocupadas: 35,
      total: 40,
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
          <h1>Turmas</h1>
          <p>Gerencie as turmas na instituição</p>
        </div>
      </div>

      {/* Estatísticas */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Alunos</h4>
          <strong>{Turmas.length}</strong>
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
            placeholder="Buscar turma por disciplina, código ou professor..."
          />
        </div>

        <button className={styles.novoBtn}>
          <Plus size={18} />
          Novo Aluno
        </button>
      </div>

      {/* Lista */}
      <div className={styles.lista}>
        {turmas.map((turma) => {
          const percentual = Math.round((turma.ocupadas / turma.total) * 100);

          return (
            <Card key={turma.id}>
              <div className={styles.turmaCard}>
                <div className={styles.info}>
                  <h3>{turma.disciplina}</h3>

                  <div className={styles.badges}>
                    <span className={styles.codigo}>{turma.codigo}</span>
                    <span className={styles.periodo}>{turma.periodo}</span>
                  </div>

                  <div className={styles.detalhes}>
                    <span>📅 {turma.horario}</span>
                    <span>📍 {turma.local}</span>
                    <span>👨‍🏫 {turma.professor}</span>
                  </div>
                </div>

                <div className={styles.vagas}>
                  <strong>
                    {turma.ocupadas}/{turma.total}
                  </strong>
                  <span>Alunos</span>

                  <div className={styles.progress}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${percentual}%` }}
                    ></div>
                  </div>
                </div>

                <div className={styles.acoes}>✏️ 🗑️</div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
