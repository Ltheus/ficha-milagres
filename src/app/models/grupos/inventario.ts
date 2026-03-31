import { AtualMaximo } from '../genericos/atualMaximo';
import { Item } from '../genericos/item';

export class Inventario {
  carga: AtualMaximo = new AtualMaximo();
  creditos: number = 0;
  itens: Item[] = [];
}
