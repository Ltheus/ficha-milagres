import { AtualMaximo } from '../genericos/atualMaximo';

export class Estatisticas {
  nivel: number = 0;
  xp: number = 0;
  vida: AtualMaximo = new AtualMaximo();
  mana: AtualMaximo = new AtualMaximo();
  sanidade: AtualMaximo = new AtualMaximo();
  pontosAcao: AtualMaximo = new AtualMaximo();
  pontosReacao: AtualMaximo = new AtualMaximo();
  espacosMagia: AtualMaximo = new AtualMaximo();
  estatura: string = '';
  iniciativa: number = 0;
  turnos: number = 0;
  status: string = '';
  ca: number = 0;
  deslocamento: number = 0;
  bonusForca: string = '';
  experienciaVsMorte: number = 0;
}
