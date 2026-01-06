import styles from "../styles/Botao.module.css";

type BotaoProps = {
  texto: string;
  icone?: React.ReactNode;
  onClick?: () => void;
  tipo?: "button" | "submit" | "reset";
  variante?: "primario" | "secundario" | "perigo";
  outline?: boolean; 
  className?: string;
};

export default function Botao({
  texto,
  icone,
  onClick,
  tipo = "button",
  variante = "primario",
  outline = false, 
  className,
}: BotaoProps) {
  return (
    <button
      type={tipo}
      onClick={onClick}
      className={`
        ${styles.botao}
        ${styles[variante]}
        ${outline ? styles.outline : ""}
        ${className ?? ""}
      `}
    >
      {icone && <span className={styles.icone}>{icone}</span>}
      <span>{texto}</span>
    </button>
  );
}
