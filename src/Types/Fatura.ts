import type { Itensfatura } from "./Itensfatura";
import type { Pagamento } from "./Pagamento";

export interface Fatura {
  id?: number;
  data_emissao: Date;
  valor_total: number;
  create_at?: Date;
  update_at?: Date;
  Itensfatura?: Itensfatura[];
  Pagamento?: Pagamento[];
}
