import type { Curso } from "./Curso";
import type { Professor } from "./Professor";

export interface Cursoprof {
  id?: number;
  id_curso: number;
  id_professor: number;
  Curso?: Curso;
  Professor?: Professor;
  create_at?: Date;
  update_at?: Date;
}
