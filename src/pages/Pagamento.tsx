import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Pagamento() {
  return (
    <section>
      <Titulo texto="Gestão de Pagamentos" />
      <Card>
        <p>Controle os pagamentos realizados pelos alunos.</p>
        <Botao texto="Registrar pagamento" />
        <Botao texto="Listar pagamentos" />
      </Card>
    </section>
  );
}