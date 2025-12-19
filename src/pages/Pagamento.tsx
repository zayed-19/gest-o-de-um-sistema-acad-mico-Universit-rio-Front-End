import styles from "../styles/Pagamento.module.css";
import Titulo from "../components/Titulo";
import Card from "../components/Card";
import Estatistica from "../components/Estatistica";

export default function Pagamento() {
  return (
    <section className={styles.container}>
      <Titulo
        texto="Gestão Financeira"
        subtitulo="Acompanhe pagamentos e mensalidades"
      />

      {/* Estatísticas financeiras */}
      <Card>
        <div className={styles.stats}>
          <Estatistica label="Receita Total" valor="Kz 6.960,00" tipo="success" />
          <Estatistica label="Recebido" valor="Kz 3.880,00" tipo="success" />
          <Estatistica label="Pendente" valor="Kz 980,00" tipo="warning" />
          <Estatistica label="Atrasado" valor="Kz 2.100,00" tipo="danger" />
        </div>
      </Card>

      {/* Barra de busca e filtro */}
      <Card>
        <div className={styles.busca}>
          <input
            type="text"
            placeholder="Buscar por aluno ou matrícula..."
          />

          <select
            className={styles.select}
            aria-label="Filtrar por status de pagamento"
          >
            <option>Todos os Status</option>
            <option>Pago</option>
            <option>Pendente</option>
            <option>Atrasado</option>
          </select>
        </div>
      </Card>

      {/* Resumo por método */}
      <Card>
        <div className={styles.metodos}>
          <div className={styles.metodo}>
            <strong>Express</strong>
            <span>1 pagamento</span>
          </div>

          <div className={styles.metodo}>
            <strong>Cartão</strong>
            <span>1 pagamento</span>
          </div>

          <div className={styles.metodo}>
            <strong>Cheque</strong>
            <span>1 pagamento</span>
          </div>

          <div className={styles.metodo}>
            <strong>Aguardando</strong>
            <span>2 pagamentos</span>
          </div>
        </div>
      </Card>

      {/* Tabela de pagamentos */}
      <Card>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Matrícula</th>
              <th>Valor</th>
              <th>Vencimento</th>
              <th>Status</th>
              <th>Pagamento</th>
              <th>Método</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ana Silva Santos</td>
              <td>2024001</td>
              <td className={styles.valor}>Kz 1.250,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pago}`}>Pago</span>
              </td>
              <td>08/12/2024</td>
              <td>Express</td>
            </tr>

            <tr>
              <td>Carlos Eduardo Lima</td>
              <td>2024002</td>
              <td className={styles.valor}>Kz 980,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pendente}`}>
                  Pendente
                </span>
              </td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td>Beatriz Oliveira Costa</td>
              <td>2024003</td>
              <td className={styles.valor}>Kz 1.450,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pago}`}>Pago</span>
              </td>
              <td>05/12/2024</td>
              <td>Cartão de Crédito</td>
            </tr>

            <tr>
              <td>Daniel Ferreira Souza</td>
              <td>2024004</td>
              <td className={styles.valor}>Kz 2.100,00</td>
              <td>05/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.atrasado}`}>
                  Atrasado
                </span>
              </td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td>Fernanda Martins Rocha</td>
              <td>2024005</td>
              <td className={styles.valor}>Kz 1.180,00</td>
              <td>10/12/2024</td>
              <td>
                <span className={`${styles.status} ${styles.pago}`}>Pago</span>
              </td>
              <td>09/12/2024</td>
              <td>Boleto</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>
  );
}