import styles from "../styles/Professor.module.css";
import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";

const professores = [
  {
    nome: 'Dr. João Pedro Almeida',
    titulacao: 'Doutor',
    especialidade: 'Engenharia de Software',
    email: 'joao.almeida@faculdade.com',
    disciplinas: 5,
    status: 'Ativo',
    sigla: 'DJ',
  },
  {
    nome: 'Dra. Maria Fernanda Costa',
    titulacao: 'Doutora',
    especialidade: 'Direito Civil',
    email: 'maria.costa@faculdade.com',
    disciplinas: 3,
    status: 'Ativo',
    sigla: 'DM',
  },
  {
    nome: 'Me. Roberto Carlos Santos',
    titulacao: 'Mestre',
    especialidade: 'Administração',
    email: 'roberto.santos@faculdade.com',
    disciplinas: 4,
    status: 'Ativo',
    sigla: 'MR',
  },
];

export default function ProfessorPage() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.header}>
          <Titulo texto="Corpo Docente" />
          <Botao texto="+ Novo Professor" />
        </div>

        <div className={styles.summary}>
          <Estatistica label="Total de Professores" valor={5} />
          <Estatistica label="Doutores" valor={4} />
          <Estatistica label="Mestres" valor={1} />
          <Estatistica label="Disciplinas Ativas" valor={22} />
        </div>

        <input
          type="text"
          className={styles.search}
          placeholder="Buscar professor por nome, especialidade ou titulação..."
        />

        <div className={styles.cards}>
          {professores.map((prof, index) => (
            <Card key={index}>
              <div className={styles.sigla}>{prof.sigla}</div>
              <h3>{prof.nome}</h3>
              <p><strong>Titulação:</strong> {prof.titulacao}</p>
              <p><strong>Especialidade:</strong> {prof.especialidade}</p>
              <p><strong>Email:</strong> {prof.email}</p>
              <p><strong>Disciplinas:</strong> {prof.disciplinas}</p>
              <p><strong>Status:</strong> {prof.status}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}