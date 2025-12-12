import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Turma() {
  return (
    <section>
      <Titulo texto="Gestão de Turmas" />
      <Card>
        <p>Organize as turmas e seus alunos.</p>
        <Botao texto="Criar turma" />
        <Botao texto="Listar turmas" />
      </Card>
    </section>
  );
}