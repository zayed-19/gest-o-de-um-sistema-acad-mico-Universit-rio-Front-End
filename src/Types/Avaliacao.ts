import type { Aluno } from "./Aluno";
import type { Professor } from "./Professor";

export interface Avaliacao {
  id?: number;
  tipo_de_avaliacao: string;
  nota: number;
  id_aluno: number;
  Aluno?: Aluno;
  id_professor: number;
  Professor?: Professor;
  create_at?: Date;
  update_at?: Date;
  data_avaliacao: Date;
}
