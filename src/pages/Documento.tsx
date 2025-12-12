import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Botao from "../components/Botao";

export default function Documento() {
  return (
    <section>
      <Titulo texto="Gestão de Documentos" />
      <Card>
        <p>Armazene e gerencie documentos acadêmicos.</p>
        <Botao texto="Adicionar documento" />
        <Botao texto="Listar documentos" />
      </Card>
    </section>
  );
}