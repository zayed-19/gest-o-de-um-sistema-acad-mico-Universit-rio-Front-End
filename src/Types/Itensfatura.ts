import type { Fatura } from "./Fatura";
import type { Emolumento } from "./Emolumento";

export interface Itensfatura {
  id?: number;
  valortotal: number;
  nr_fatura: number;
  id_fatura: number;
  Fatura?: Fatura;
  id_emolumento: number;
  Emolumento?: Emolumento;
  create_at?: Date;
  update_at?: Date;
}
