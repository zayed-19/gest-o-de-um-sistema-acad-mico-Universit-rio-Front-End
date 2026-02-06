import styles from "../styles/Cursos.module.css";

import Card from "../components/Card";

import {
  Search,
  Plus,
  Users,
  BookOpen,
  Clock,
  Edit,
  Trash2,
  UserCog,
} from "lucide-react";

type Curso = {
  id: number;
  nome: string;
  nivel: string;
  duracao: string;
  coordenador: string;
  alunos: number;
  disciplinas: number;
  turno: string;
};

export default function Cursos() {
  const cursos: Curso[] = [
    {
      id: 1,
      nome: "Engenharia de Software",
      nivel: "Bacharelado",
      duracao: "5 anos",
      coordenador: "Dr. João Pedro Almeida",
      alunos: 180,
      disciplinas: 45,
      turno: "Noturno",
    },
    {
      id: 2,
      nome: "Direito",
      nivel: "Bacharelado",
      duracao: "5 anos",
      coordenador: "Dra. Maria Fernanda Costa",
      alunos: 220,
      disciplinas: 52,
      turno: "Vespertino",
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
          <h1>Cursos</h1>
          <p>Gerencie cursos e as suas atribuições</p>
        </div>
      </div>

      {/* Estatísticas gerais */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Cursos</h4>
          <strong>{cursos.length}</strong>
        </div>

        <div className={`${styles.statCard} ${styles.disciplinas}`}>
          <h4>Total de cursos</h4>
          <strong>988</strong>
        </div>

        <div className={`${styles.statCard} ${styles.alunos}`}>
          <h4>Disciplinas</h4>
          <strong>50</strong>
        </div>

        <div className={`${styles.statCard} ${styles.ativos}`}>
          <h4>Coordenadores</h4>
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

      {/* Cursos */}
      <div className={styles.lista}>
        {cursos.map((curso) => (
          <Card key={curso.id} className={styles.cursoCard}>
            {/* Header */}
            <div className={styles.header}>
              <div>
                <h3>{curso.nome}</h3>
                <span>{curso.nivel}</span>
              </div>
              <div className={styles.toggle} />
            </div>

            <div className={styles.duracao}>
              <Clock size={14} /> Duração: {curso.duracao}
            </div>

            {/* Info */}
            <div className={styles.info}>
              <div>
                <Users size={18} />
                <strong>{curso.alunos}</strong>
                <span>Alunos</span>
              </div>

              <div>
                <BookOpen size={18} />
                <strong>{curso.disciplinas}</strong>
                <span>Disciplinas</span>
              </div>

              <div>
                <span>Turno</span>
                <strong>{curso.turno}</strong>
              </div>
            </div>

            <hr />

            {/* Footer */}
            <div className={styles.footer}>
              <div>
                <span>Coordenador do Curso</span>
                <strong>{curso.coordenador}</strong>
              </div>

              <div className={styles.acoes}>
                <button className={styles.editar}>
                  <Edit size={16} /> Editar
                </button>
                <button className={styles.excluir}>
                  <Trash2 size={16} /> Excluir
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
