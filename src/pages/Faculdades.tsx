import styles from "../styles/Faculdade.module.css";
import Card from "../components/Card";
import {
  Building2,
  BookOpen,
  Users,
  GraduationCap,
  Search,
  Plus,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Faculdade() {
  const faculdades = [
    {
      id: 1,
      nome: "Faculdade de Tecnologia",
      endereco: "Av. Paulista, 1000 - São Paulo, SP",
      telefone: "(11) 3000-1000",
      email: "contato@ft.edu.br",
      cursos: 8,
      alunos: 450,
      professores: 35,
      coordenador: "Dr. João Pedro Almeida",
    },
    {
      id: 2,
      nome: "Faculdade de Direito",
      endereco: "Rua da Consolação, 500 - São Paulo, SP",
      telefone: "(11) 3000-2000",
      email: "contato@fd.edu.br",
      cursos: 3,
      alunos: 320,
      professores: 28,
      coordenador: "Dra. Maria Fernanda Costa",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.headerPage}>
        <div className={styles.headerIcon}>
          <Building2 size={22} />
        </div>
        <div className={styles.headerText}>
          <h1>Faculdades</h1>
          <p>Gerencie as unidades da instituição</p>
        </div>
      </div>

      {/* Estatísticas gerais */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Faculdades</h4>
          <strong>{faculdades.length}</strong>
        </div>

        <div className={`${styles.statCard} ${styles.cursos}`}>
          <h4>Total de Cursos</h4>
          <strong>26</strong>
        </div>

        <div className={`${styles.statCard} ${styles.alunos}`}>
          <h4>Total de Alunos</h4>
          <strong>1460</strong>
        </div>

        <div className={`${styles.statCard} ${styles.professores}`}>
          <h4>Total de Professores</h4>
          <strong>152</strong>
        </div>
      </div>

      {/* Busca */}
      <div className={styles.buscaCard}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar faculdade por nome ou coordenador..."
          />
        </div>

        <button className={styles.novoBtn}>
          <Plus size={18} />
          Nova Faculdade
        </button>
      </div>

      {/* Grid de faculdades */}
      <div className={styles.grid}>
        {faculdades.map((faculdade) => (
          <Card key={faculdade.id} className={styles.card}>
            {/* Cabeçalho do card */}
            <div className={styles.cardHeader}>
              <div className={styles.cardLeft}>
                <div className={styles.icon}>
                  <Building2 size={20} />
                </div>

                <h3 className={styles.titulo}>{faculdade.nome}</h3>
              </div>
            </div>

            {/* Informações */}
            <div className={styles.info}>
              <p>
                <MapPin size={16} />
                {faculdade.endereco}
              </p>
              <p>
                <Phone size={16} />
                {faculdade.telefone}
              </p>
              <p>
                <Mail size={16} />
                {faculdade.email}
              </p>
            </div>

            {/* Estatísticas */}
            <div className={styles.cardStats}>
              <div className={styles.stat}>
                <BookOpen size={16} />
                <span>Cursos</span>
                <strong>{faculdade.cursos}</strong>
              </div>

              <div className={styles.stat}>
                <Users size={16} />
                <span>Alunos</span>
                <strong>{faculdade.alunos}</strong>
              </div>

              <div className={styles.stat}>
                <GraduationCap size={16} />
                <span>Professores</span>
                <strong>{faculdade.professores}</strong>
              </div>
            </div>

            {/* Coordenador */}
            <div className={styles.coordenador}>
              <span>Coordenador</span>
              <strong>{faculdade.coordenador}</strong>
            </div>

            <button className={styles.detalhesBtn}>Ver Detalhes</button>
          </Card>
        ))}
      </div>
    </section>
  );
}
