import type { Avaliacao } from "./Avaliacao";
import type { Pagamento } from "./Pagamento";
import type { Turma } from "./Turma";
import type { Matricula } from "./Matricula";
import type { Presenca } from "./Presenca";
import type { Historico_matricula } from "./Historico_matricula";

export interface Aluno {
  id?: number;
  nome: string;
  dataNasc: Date;
  morada: string;
  genero: string;
  telefone: number;
  idade: number;
  id_turma: number;
  Turma?: Turma[];
  create_at?: Date;
  update_at?: Date;
  Avaliacao?: Avaliacao[];
  Pagamento?: Pagamento[];
  Matricula?: Matricula[];
  Presenca?: Presenca[];
  Historico_matricula?: Historico_matricula[];
}
