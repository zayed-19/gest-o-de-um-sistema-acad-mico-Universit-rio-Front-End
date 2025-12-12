import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Importando páginas
import Home from "./pages/home";
import Aluno from "./pages/Aluno";
import Professor from "./pages/Professor";
import Documento from "./pages/Documento";
import Disciplina from "./pages/Disciplina";
import Turma from "./pages/Turma";
import Curso from "./pages/Curso";
import Avaliacao from "./pages/Avaliacao";
import Pagamento from "./pages/Pagamento";
import Matricula from "./pages/Matricula";
import Faculdades from "./pages/Faculdades";


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aluno" element={<Aluno />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/documento" element={<Documento />} />
          <Route path="/disciplina" element={<Disciplina />} />
          <Route path="/turma" element={<Turma />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="/faculdades" element={<Faculdades />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}