import styles from "../styles/Avaliacoes.module.css";

import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";

import {
  ClipboardCheck,
  Search,
  Plus,
  Eye,
  Edit,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";
                                                                
export default function Avaliacoes() {
  return (
    <section className={styles.container}>
      {/* TÍTULO */}
      <Titulo
        texto="Avaliações"
        subtitulo="Gerencie provas, trabalhos e atividades avaliativas"
        icone={<ClipboardCheck size={18} />}
      />

      {/* ESTATÍSTICAS */}
      <div className={styles.estatisticas}>
        <Estatistica label="Total de Avaliações" valor="5" tipo="danger" />
        <Estatistica label="Agendadas" valor="2" tipo="success" />
        <Estatistica label="Em Correção" valor="1" tipo="warning" />
        <Estatistica label="Concluídas" valor="1" tipo="success" />
      </div>

      {/* BUSCA + BOTÃO */}
      <Card className={styles.filtro}>
        <div className={styles.busca}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar avaliação por título, disciplina ou turma..."
          />
        </div>

        <Botao
          texto="+ Nova Avaliação"
          icone={<Plus size={18} />}
          variante="perigo"
        />
      </Card>

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

              <p>
                Algoritmos e Estruturas de Dados • ENG-2024-4A
              </p>

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
            <Botao
              texto="Editar"
              icone={<Edit size={16} />}
              outline
            />
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

              <p>
                Direito Constitucional • DIR-2024-6B
              </p>

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
            <Botao
              texto="Editar"
              icone={<Edit size={16} />}
              outline
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
