import styles from "../styles/Cursos.module.css";
import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";

import {
  Search,
  Plus,
  GraduationCap,
  Users,
  BookOpen,
  Clock,
  Edit,
  Trash2,
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
      <Titulo
        texto="Cursos Oferecidos"
        subtitulo="Gerencie os cursos da instituição"
        icone={<GraduationCap />}
      />

      {/* Estatísticas */}
      <div className={styles.stats}>
        <Estatistica label="Total de Cursos" valor="5" />
        <Estatistica label="Total de Alunos" valor="820" tipo="success" />
        <Estatistica label="Disciplinas" valor="251" tipo="warning" />
        <Estatistica label="Coordenadores" valor="5" />
      </div>

      {/* Busca */}
      <Card>
        <div className={styles.busca}>
          <div className={styles.search}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar curso por nome, coordenador ou nível..."
            />
          </div>

          <Botao texto="+ Novo Curso" icone={<Plus size={18} />} />
        </div>
      </Card>

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
