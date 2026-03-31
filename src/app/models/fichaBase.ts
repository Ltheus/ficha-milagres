import { Caracteristicas } from './grupos/caracteristicas';
import { Estatisticas } from './grupos/estatisticas';
import { Atributos } from './grupos/atributos';
import { Pericias } from './grupos/pericias';
import { Defesas } from './grupos/defesas';
import { Ataque } from './grupos/ataques';
import { Sobre } from './grupos/sobre';
import { Habilidade } from './genericos/habilidade';
import { Inventario } from './grupos/inventario';
import { Vestuario } from './grupos/vestuario';

export class fichaBase {
  caracteristicas: Caracteristicas = new Caracteristicas();
  estatisticas: Estatisticas = new Estatisticas();
  atributos: Atributos = new Atributos();
  pericias: Pericias = new Pericias();
  defesas: Defesas = new Defesas();
  ataques: Ataque[] = [];
  sobre: Sobre = new Sobre();
  habilidades: Habilidade[] = [];
  inventario: Inventario = new Inventario();
  vestuario: Vestuario = new Vestuario();
}
