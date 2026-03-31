import { AtualMaximo } from './atualMaximo';

export class Item {
  nome: string = '';
  preco: number = 0;
  carga: number = 0;
  descricao: string = '';
  material: string = '';
  recarga: AtualMaximo = new AtualMaximo();
  quantidade: number = 0;
}
