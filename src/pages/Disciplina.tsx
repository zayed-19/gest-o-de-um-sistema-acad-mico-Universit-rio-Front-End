import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Disciplina() {
  return (
    <section>
      <Titulo texto="Gestão de Disciplinas" />
      <Card>
        <p>Controle as disciplinas vinculadas aos cursos.</p>
        <Botao texto="Cadastrar disciplina" />
        <Botao texto="Listar disciplinas" />
      </Card>
    </section>
  );
}