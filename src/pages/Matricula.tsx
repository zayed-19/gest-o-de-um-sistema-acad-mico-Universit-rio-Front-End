import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Matricula() {
  return (
    <section>
      <Titulo texto="Gestão de Matrículas" />
      <Card>
        <p>Gerencie as matrículas dos alunos nos cursos.</p>
        <Botao texto="Nova matrícula" />
        <Botao texto="Listar matrículas" />
      </Card>
    </section>
  );
}