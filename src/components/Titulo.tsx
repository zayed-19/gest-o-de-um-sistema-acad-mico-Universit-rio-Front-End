// src/components/Titulo.tsx
import styles from "../styles/Titulo.module.css";

export default function Titulo({ texto }: { texto: string }) {
  return <h2 className={styles.titulo}>{texto}</h2>;
}