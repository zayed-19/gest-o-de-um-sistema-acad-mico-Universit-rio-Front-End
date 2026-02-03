import type { Discicurso } from "./Discicurso";
import type { Disciprof } from "./Disciprof";
import type { Turmadisci } from "./Turmadisci";

export interface Disciplina {
  id?: number;
  tipo_disciplina: string;
  Turmadisci?: Turmadisci[];
  Disciprof?: Disciprof[];
  Discicurso?: Discicurso[];
  create_at?: Date;
  update_at?: Date;
}
