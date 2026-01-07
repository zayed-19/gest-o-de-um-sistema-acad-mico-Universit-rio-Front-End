import styles from "../styles/Professor.module.css";
import { UserCog, Search, Plus, Pencil, Trash2 } from "lucide-react";

export default function Professor() {
  const professores = [
    {
      registro: "PROF001",
      nome: "Dr. João Pedro Almeida",
      area: "Engenharia de Software",
      titulacao: "Doutorado",
      disciplinas: 3,
      alunos: 120,
      status: "Ativo",
      email: "joao.almeida@faculdade.com",
    },
    {
      registro: "PROF002",
      nome: "Dra. Maria Fernanda Costa",
      area: "Direito Constitucional",
      titulacao: "Doutorado",
      disciplinas: 2,
      alunos: 85,
      status: "Ativo",
      email: "maria.costa@faculdade.com",
    },
    {
      registro: "PROF003",
      nome: "Me. Roberto Carlos Santos",
      area: "Administração",
      titulacao: "Mestrado",
      disciplinas: 4,
      alunos: 140,
      status: "Ativo",
      email: "roberto.santos@faculdade.com",
    },
    {
      registro: "PROF004",
      nome: "Dra. Ana Paula Rodrigues",
      area: "Psicologia",
      titulacao: "Doutorado",
      disciplinas: 1,
      alunos: 60,
      status: "Afastado",
      email: "ana.rodrigues@faculdade.com",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.headerPage}>
        <div className={styles.headerIcon}>
          <UserCog size={22} />
        </div>
        <div className={styles.headerText}>
          <h1>Professores</h1>
          <p>Gerencie professores e as suas atribuições</p>
        </div>
      </div>

      {/* Estatísticas gerais */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Professores</h4>
          <strong>{professores.length}</strong>
        </div>

        <div className={`${styles.statCard} ${styles.disciplinas}`}>
          <h4>Disciplinas Ministradas</h4>
          <strong>10</strong>
        </div>

        <div className={`${styles.statCard} ${styles.alunos}`}>
          <h4>Alunos Atendidos</h4>
          <strong>405</strong>
        </div>

        <div className={`${styles.statCard} ${styles.ativos}`}>
          <h4>Professores Ativos</h4>
          <strong>3</strong>
        </div>
      </div>

      {/* Barra de busca */}
      <div className={styles.buscaCard}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar professor por nome, registro ou área..."
          />
        </div>

        <button className={styles.novoBtn}>
          <Plus size={18} />
          Novo Professor
        </button>
      </div>

      {/* Grid de Professores */}
      <div className={styles.grid}>
        {professores.map((professor) => {
          const iniciais = professor.nome
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <div key={professor.registro} className={styles.profCard}>
              {/* Cabeçalho Roxo */}
              <div className={styles.profHeader}>
                <div className={styles.profInitials}>{iniciais}</div>

                <div className={styles.profActions}>
                  <Pencil size={18} className={styles.profEdit} />
                  <Trash2 size={18} className={styles.profDelete} />
                </div>
              </div>

              {/* Corpo */}
              <div className={styles.profBody}>
                <h3 className={styles.profName}>{professor.nome}</h3>
                <p className={styles.profTitle}>{professor.titulacao}</p>
                <p className={styles.profArea}>{professor.area}</p>
                <p className={styles.profEmail}>{professor.email}</p>

                <div className={styles.profStats}>
                  <span>
                    <strong>{professor.disciplinas}</strong> disciplinas
                  </span>
                  <span>
                    Status: <strong>{professor.status}</strong>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
