import type { Aluno } from "./Aluno";
import type { Curso } from "./Curso";
import type { Turmadisci } from "./Turmadisci";
import type { Turmaprof } from "./Turmaprof";

export interface Turma {
  id?: number;
  nome: string;
  id_curso: number;
  Curso?: Curso;
  create_at?: Date;
  update_at?: Date;
  Aluno?: Aluno[];
  Turmadisci?: Turmadisci[];
  Turmaprof?: Turmaprof[];
}
