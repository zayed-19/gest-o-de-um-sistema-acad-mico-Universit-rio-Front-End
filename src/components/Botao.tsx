// src/components/Botao.tsx
import styles from "../styles/Botao.module.css";

export default function Botao({ texto }: { texto: string }) {
  return <button className={styles.botao}>{texto}</button>;
}