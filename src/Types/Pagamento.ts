import type { Aluno } from "./Aluno";
import type { Emolumento } from "./Emolumento";
import type { Fatura } from "./Fatura";

export interface Pagamento {
  id?: number;
  data_pagamento: string;
  metodo_pagamento: string;
  id_aluno: number;
  Aluno?: Aluno;
  id_emolumento: number;
  Emolumento?: Emolumento;
  valor: number;
  id_fatura: number;
  Fatura?: Fatura;
  create_at?: Date;
  update_at?: Date;
}
