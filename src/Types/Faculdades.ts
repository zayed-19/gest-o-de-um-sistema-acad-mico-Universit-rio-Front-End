import type { Curso } from "./Curso";

export interface Faculdades {
  id?: number;
  tipos_faculdades: string;
  Curso?: Curso[];
  create_at?: Date;
  update_at?: Date;
}
