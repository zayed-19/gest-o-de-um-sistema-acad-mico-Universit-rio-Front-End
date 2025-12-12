import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Faculdades() {
  return (
    <section>
      <Titulo texto="Gestão de Faculdades" />
      <Card>
        <p>Controle as faculdades vinculadas ao sistema.</p>
        <Botao texto="Cadastrar faculdade" />
        <Botao texto="Listar faculdades" />
      </Card>
    </section>
  );
}