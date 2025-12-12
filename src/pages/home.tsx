import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Home() {
  return (
    <section>
      <Titulo texto="Bem-vindo ao Sistema Acadêmico" />
      <Card>
        <p>Escolha uma das opções no menu acima para navegar.</p>
        <Botao texto="Explorar cursos" />
      </Card>
    </section>
  );
}