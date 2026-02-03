import type { Curso } from "./Curso";
import type { Disciplina } from "./Disciplina";

export interface Discicurso {
  id?: number;
  id_disciplina: number;
  id_curso: number;
  Disciplina?: Disciplina;
  Curso?: Curso;
  create_at?: Date;
  update_at?: Date;
}
