import type { Professor } from "./Professor";
import type { Disciplina } from "./Disciplina";

export interface Disciprof {
  id?: number;
  id_disciplina: number;
  id_professor: number;
  Disciplina?: Disciplina;
  Professor?: Professor;
  create_at?: Date;
  update_at?: Date;
}
