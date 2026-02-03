import type { Turma } from "./Turma";
import type { Professor } from "./Professor";

export interface Turmaprof {
  id?: number;
  id_turma: number;
  Turma?: Turma;
  id_professor: number;
  Professor?: Professor;
  create_at?: Date;
  update_at?: Date;
}
