import type { Aluno } from "./Aluno";
import type { Historico_matricula } from "./Historico_matricula";

export interface Matricula {
  id?: number;
  ano_lectivo: string;
  data_matricula: Date;
  estado_matricula: string;
  id_aluno: number;
  Aluno?: Aluno;
  Historico_matricula?: Historico_matricula[];
  create_at?: Date;
  update_at?: Date;
}
