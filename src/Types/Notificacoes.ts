export interface Notificacoes {
  id?: number;
  tipo_notificacao: string;
  data_envio: Date;
  informacao: string;
  create_at?: Date;
  update_at?: Date;
}
