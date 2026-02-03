import type { Faculdades } from "./Faculdades";
import type { Professor } from "./Professor";
import type { Cursoprof } from "./Cursoprof";
import type { Discicurso } from "./Discicurso";

export interface Curso {
  id?: number;
  nome: string;
  duracao: number;
  id_faculdades: number;
  id_coordenador: number;
  Faculdades?: Faculdades;
  Professor?: Professor;
  create_at?: Date;
  update_at?: Date;
  Cursoprof?: Cursoprof[];
  Discicurso?: Discicurso[];
}
