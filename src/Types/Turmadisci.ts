import type { Turma } from "./Turma";
import type { Disciplina } from "./Disciplina";

export interface Turmadisci {
  id?: number;
  id_turma: number;
  Turma?: Turma;
  id_disciplina: number;
  Disciplina?: Disciplina;
  create_at?: Date;
  update_at?: Date;
}
