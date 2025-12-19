import styles from "../styles/Titulo.module.css";

type TituloProps = {
  texto: string;
  subtitulo?: string;
  className?: string;
};

export default function Titulo({ texto, subtitulo, className }: TituloProps) {
  return (
    <div className={`${styles.tituloWrapper} ${className ?? ""}`}>
      <h2 className={styles.titulo}>{texto}</h2>
      {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
    </div>
  );
}