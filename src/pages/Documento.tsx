import styles from "../styles/Documentos.module.css";
import Card from "../components/Card";
import {
  FileText,
  Search,
  Upload,
  Eye,
  Download,
} from "lucide-react";

export default function Documentos() {
  const documentos = [
    {
      id: 1,
      titulo: "Histórico Escolar - Ana Silva",
      tipo: "Histórico",
      aluno: "Ana Silva Santos",
      data: "15/11/2024",
      status: "Aprovado",
      tamanho: "2.3 MB",
    },
    {
      id: 2,
      titulo: "Certificado de Conclusão - Carlos Lima",
      tipo: "Certificado",
      aluno: "Carlos Eduardo Lima",
      data: "10/11/2024",
      status: "Pendente",
      tamanho: "1.8 MB",
    },
    {
      id: 3,
      titulo: "Declaração de Matrícula - Beatriz Costa",
      tipo: "Declaração",
      aluno: "Beatriz Oliveira Costa",
      data: "08/11/2024",
      status: "Aprovado",
      tamanho: "850 KB",
    },
    {
      id: 4,
      titulo: "Comprovante de Pagamento - Daniel Souza",
      tipo: "Comprovante",
      aluno: "Daniel Ferreira Souza",
      data: "05/11/2024",
      status: "Aprovado",
      tamanho: "1.2 MB",
    },
    {
      id: 5,
      titulo: "Atestado Médico - Fernanda Rocha",
      tipo: "Atestado",
      aluno: "Fernanda Martins Rocha",
      data: "01/11/2024",
      status: "Em Análise",
      tamanho: "3.1 MB",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <FileText size={22} />
        </div>
        <div>
          <h1>Gestão de Documentos</h1>
          <p>Centralize e organize todos os documentos acadêmicos</p>
        </div>
      </div>

      {/* Estatísticas */}
      <div className={styles.stats}>
        <div className={`${styles.statCard} ${styles.total}`}>
          <span>Total de Documentos</span>
          <strong>5</strong>
        </div>
        <div className={`${styles.statCard} ${styles.aprovados}`}>
          <span>Aprovados</span>
          <strong>3</strong>
        </div>
        <div className={`${styles.statCard} ${styles.pendentes}`}>
          <span>Pendentes</span>
          <strong>2</strong>
        </div>
        <div className={`${styles.statCard} ${styles.mes}`}>
          <span>Este Mês</span>
          <strong>5</strong>
        </div>
      </div>

      {/* Busca */}
      <Card>
        <div className={styles.buscaArea}>
          <div className={styles.busca}>
            <Search size={18} />
            <input placeholder="Buscar documento por título, aluno ou tipo..." />
          </div>

          <button className={styles.uploadBtn}>
            <Upload size={18} />
            Upload Documento
          </button>
        </div>

        <div className={styles.filtros}>
          {["Histórico", "Certificado", "Declaração", "Comprovante", "Atestado", "Outros"].map(
            (tipo) => (
              <span key={tipo}>{tipo}</span>
            )
          )}
        </div>
      </Card>

      {/* Tabela */}
      <Card>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Tipo</th>
              <th>Aluno</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tamanho</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((doc) => (
              <tr key={doc.id}>
                <td className={styles.docNome}>
                  <FileText size={18} />
                  {doc.titulo}
                </td>

                <td>
                  <span className={styles.tipo}>{doc.tipo}</span>
                </td>

                <td>{doc.aluno}</td>
                <td>{doc.data}</td>

                <td>
                  <span
                    className={`${styles.status} ${styles[doc.status.replace(" ", "").toLowerCase()]}`}
                  >
                    {doc.status}
                  </span>
                </td>

                <td>{doc.tamanho}</td>

                <td className={styles.acoes}>
                  <Eye size={18} />
                  <Download size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}
