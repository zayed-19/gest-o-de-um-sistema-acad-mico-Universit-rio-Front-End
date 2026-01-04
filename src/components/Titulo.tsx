import styles from "../styles/Titulo.module.css";

type TituloProps = {
  texto: string;
  subtitulo?: string;
  icone?: React.ReactNode;
  className?: string;
};

export default function Titulo({
  texto,
  subtitulo,
  icone,
  className,
}: TituloProps) {
  return (
    <div className={`${styles.tituloWrapper} ${className ?? ""}`}>
      <div className={styles.tituloLinha}>
        {icone && <span className={styles.icone}>{icone}</span>}
        <h2 className={styles.titulo}>{texto}</h2>
      </div>

      {subtitulo && (
        <p className={styles.subtitulo}>{subtitulo}</p>
      )}
    </div>
  );
}
