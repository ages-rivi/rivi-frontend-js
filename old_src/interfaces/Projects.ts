import { Pesquisadores } from 'old_src/interfaces/Reasercher';

export interface Projects {
  id: string;
  titulo: string;
  descricao?: string;
  estado?: string;
  tag?: Array<string>;
  pesquisadores?: Array<Pesquisadores>;
}
