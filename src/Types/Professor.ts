import type { Curso } from "./Curso";
import type { Avaliacao } from "./Avaliacao";
import type { Turmaprof } from "./Turmaprof";
import type { Disciprof } from "./Disciprof";
import type { Cursoprof } from "./Cursoprof";

export interface Professor {
  id?: string;
  nome: string;
  bi_passaporte: string;
  telefone: string;
  email: string;
  Curso?: Curso[];
  Avaliacao?: Avaliacao[];
  Turmaprof?: Turmaprof[];
  Disciprof?: Disciprof[];
  Cursoprof?: Cursoprof[];
  create_at?: Date;
  update_at?: Date;
}
