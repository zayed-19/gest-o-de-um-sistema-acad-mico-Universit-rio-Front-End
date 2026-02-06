import styles from "../styles/Avaliacoes.module.css";
import Card from "../components/Card";
import Botao from "../components/Botao";

import {
  ClipboardCheck,
  Eye,
  Edit,
  Calendar,
  TrendingUp,
  Users,
  Layers,
  Search,
  Plus,
} from "lucide-react";

export default function Avaliacoes() {
  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.headerPage}>
        <div className={styles.headerIcon}>
          <Layers size={22} />
        </div>
        <div className={styles.headerText}>
          <h1>Avaliações</h1>
          <p>
            Gerencie as avaliações das disciplinas oferecidas pela instituição
          </p>
        </div>
      </div>

      {/* Estatísticas gerais */}
      <div className={styles.statsResumo}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <h4>Total de Avaliações</h4>
          <strong>12</strong>
        </div>

        <div className={`${styles.statCard} ${styles.carga}`}>
          <h4>Agendadas</h4>
          <strong>4</strong>
        </div>

        <div className={`${styles.statCard} ${styles.creditos}`}>
          <h4>Em Correção</h4>
          <strong>3</strong>
        </div>

        <div className={`${styles.statCard} ${styles.alunos}`}>
          <h4>Concluídas</h4>
          <strong>5</strong>
        </div>
      </div>

      {/* Busca */}
      <div className={styles.buscaCard}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar avaliação por código, nome ou professor..."
          />
        </div>
        <button className={styles.novoBtn}>
          <Plus size={18} />
          Nova Avaliação
        </button>
      </div>

      {/* LISTA DE AVALIAÇÕES */}
      <div className={styles.lista}>
        <Card className={styles.avaliacao}>
          <div className={styles.info}>
            <div className={styles.icone}>
              <ClipboardCheck />
            </div>

            <div className={styles.dados}>
              <div className={styles.tituloLinha}>
                <h3>Prova P1 - Algoritmos</h3>
                <span className={`${styles.tag} ${styles.agendada}`}>
                  Agendada
                </span>
              </div>

              <p>Algoritmos e Estruturas de Dados • ENG-2024-4A</p>

              <div className={styles.meta}>
                <span>
                  <Calendar size={14} /> 20/11/2024
                </span>
                <span className={styles.tipo}>Prova</span>
                <span>
                  <TrendingUp size={14} /> 30%
                </span>
                <span>
                  <Users size={14} /> 45 alunos
                </span>
              </div>
            </div>
          </div>

          <div className={styles.acoes}>
            <Botao
              texto="Ver Detalhes"
              icone={<Eye size={16} />}
              variante="perigo"
              outline
            />
            <Botao texto="Editar" icone={<Edit size={16} />} outline />
          </div>
        </Card>

        {/* ITEM 2 */}
        <Card className={styles.avaliacao}>
          <div className={styles.info}>
            <div className={styles.icone}>
              <ClipboardCheck />
            </div>

            <div className={styles.dados}>
              <div className={styles.tituloLinha}>
                <h3>Trabalho Final - Direito Constitucional</h3>
                <span className={`${styles.tag} ${styles.correção}`}>
                  Em Correção
                </span>
              </div>

              <p>Direito Constitucional • DIR-2024-6B</p>

              <div className={styles.meta}>
                <span>
                  <Calendar size={14} /> 15/11/2024
                </span>
                <span className={styles.tipo}>Trabalho</span>
                <span>
                  <TrendingUp size={14} /> 40%
                </span>
                <span>
                  <Users size={14} /> 38 alunos
                </span>
              </div>
            </div>
          </div>

          <div className={styles.acoes}>
            <Botao
              texto="Ver Detalhes"
              icone={<Eye size={16} />}
              variante="perigo"
            />
            <Botao texto="Editar" icone={<Edit size={16} />} outline />
          </div>
        </Card>
      </div>
    </section>
  );
}
