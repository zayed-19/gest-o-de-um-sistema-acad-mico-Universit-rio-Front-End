import styles from "../styles/Estatistica.module.css";

export default function Estatistica({ label, valor }: { label: string; valor: number }) {
  return (
    <div className={styles.card}>
      <strong>{valor}</strong>
      <span>{label}</span>
    </div>
  );
}