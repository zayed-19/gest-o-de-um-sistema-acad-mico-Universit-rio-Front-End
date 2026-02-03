import type { Aluno } from "./Aluno";
import type { Matricula } from "./Matricula";

export interface Historico_matricula {
  id?: number;
  id_aluno: number;
  Aluno?: Aluno;
  id_matricula: number;
  Matricula?: Matricula;
  create_at?: Date;
  update_at?: Date;
}
