import { AtualMaximo } from '../genericos/atualMaximo';

export class Ataque {
  nome: string = '';
  teste: string = '';
  classeDificuldade: number = 0;
  dano: string = '';
  alcance: string = '';
  recarga: AtualMaximo = new AtualMaximo();
  defeito: number = 0;
  recuo: number = 0;
}
