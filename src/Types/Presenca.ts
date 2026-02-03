import type { Aluno } from "./Aluno";
import type { Disciplina } from "./Disciplina";

export interface Presenca {
  id?: number;
  data_presenca: Date;
  status: string;
  id_aluno: number;
  Aluno?: Aluno;
  id_disciplina: number;
  Disciplina?: Disciplina;
  create_at?: Date;
  update_at?: Date;
}
