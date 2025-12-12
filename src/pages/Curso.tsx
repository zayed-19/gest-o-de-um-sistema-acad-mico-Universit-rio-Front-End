import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Curso() {
  return (
    <section>
      <Titulo texto="Gestão de Cursos" />
      <Card>
        <p>Gerencie os cursos oferecidos pela instituição.</p>
        <Botao texto="Criar curso" />
        <Botao texto="Listar cursos" />
      </Card>
    </section>
  );
}