import styles from "../styles/Estatistica.module.css";

type EstatisticaProps = {
  label: string;
  valor: string;
  tipo?: "success" | "warning" | "danger";
};

export default function Estatistica({ label, valor, tipo }: EstatisticaProps) {
  return (
    <div className={`${styles.card} ${tipo ? styles[tipo] : ""}`}>
      <strong>{valor}</strong>
      <span>{label}</span>
    </div>
  );
}