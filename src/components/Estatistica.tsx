import styles from "../styles/Estatistica.module.css";

type EstatisticaProps = {
  titulo?: string;
  label?: string;
  valor: number | string;

  // padrão antigo (mantido)
  tipo?: "success" | "warning" | "danger";

  // novo padrão
  variante?: "primario" | "info" | "sucesso" | "alerta";
};

export default function Estatistica({
  titulo,
  label,
  valor,
  tipo,
  variante,
}: EstatisticaProps) {
  const classeVariante = variante
    ? styles[variante]
    : tipo
    ? styles[tipo]
    : "";

  return (
    <div className={`${styles.card} ${classeVariante}`}>
      <strong>{valor}</strong>
      <span>{titulo || label}</span>
    </div>
  );
}
