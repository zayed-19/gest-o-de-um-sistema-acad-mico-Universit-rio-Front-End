import type { Itensfatura } from "./Itensfatura";
import type { Pagamento } from "./Pagamento";

export interface Emolumento {
  id?: number;
  referencia: number;
  valor: number;
  Itensfatura?: Itensfatura;
  Pagamento?: Pagamento[];
  create_at?: Date;
  update_at?: Date;
}
