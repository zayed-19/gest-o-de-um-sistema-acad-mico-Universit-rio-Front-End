import styles from "../styles/Estatistica.module.css";

type EstatisticaProps = {
  titulo?: string;
  label?: string;
  valor: number | string;
  tipo?: "success" | "warning" | "danger";
};

export default function Estatistica({
  titulo,
  label,
  valor,
  tipo,
}: EstatisticaProps) {
  return (
    <div className={`${styles.card} ${tipo ? styles[tipo] : ""}`}>
      <strong>{valor}</strong>
      <span>{titulo || label}</span>
    </div>
  );
}
