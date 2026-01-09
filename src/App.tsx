import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Páginas
import Login from "./pages/Login";
import Aluno from "./pages/Aluno";
import Professor from "./pages/Professor";
import Documento from "./pages/Documento";
import Disciplina from "./pages/Disciplina";
import Turma from "./pages/Turma";
import Curso from "./pages/Curso";
import Avaliacao from "./pages/Avaliacoes";
import Pagamento from "./pages/Pagamento";
import Matricula from "./pages/Matricula";
import Faculdades from "./pages/Faculdades";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login como página inicial */}
        <Route path="/" element={<Login />} />

        {/* Páginas com Layout */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Aluno />} />
          <Route path="professor" element={<Professor />} />
          <Route path="documento" element={<Documento />} />
          <Route path="disciplina" element={<Disciplina />} />
          <Route path="turma" element={<Turma />} />
          <Route path="curso" element={<Curso />} />
          <Route path="avaliacao" element={<Avaliacao />} />
          <Route path="pagamento" element={<Pagamento />} />
          <Route path="matricula" element={<Matricula />} />
          <Route path="faculdades" element={<Faculdades />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
