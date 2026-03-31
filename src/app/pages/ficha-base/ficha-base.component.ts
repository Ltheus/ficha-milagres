import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ficha-base',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ficha-base.component.html'
})
export class FichaBaseComponent {
  private fb = inject(FormBuilder);

  private criarAtualMaximo(): FormGroup {
    return this.fb.group({
      maximo: [0],
      atual: [0]
    });
  }

  private criarVantagemDesvantagem(): FormGroup {
    return this.fb.group({
      vantagem: [false],
      desvantagem: [false]
    });
  }

  private criarAtributoPericia(): FormGroup {
    return this.fb.group({
      valor: [0],
      bonus: this.fb.array([this.fb.control(0)]), // Array inicializado com 1 item
      vantagemDesvantagem: this.criarVantagemDesvantagem()
    });
  }

  private criarAtaque(): FormGroup {
    return this.fb.group({
      nome: [''],
      teste: [''],
      classeDificuldade: [0],
      dano: [''],
      alcance: [''],
      recarga: this.criarAtualMaximo(),
      defeito: [0],
      recuo: [0]
    });
  }

  private criarHabilidade(): FormGroup {
    return this.fb.group({
      nome: [''],
      descricao: ['']
    });
  }

  private criarItem(): FormGroup {
    return this.fb.group({
      nome: [''],
      preco: [0],
      carga: [0],
      descricao: [''],
      material: [''],
      recarga: this.criarAtualMaximo(),
      quantidade: [0]
    });
  }

  fichaBaseForm = this.fb.group({
    caracteristicas: this.fb.group({
      nome: [''],
      especie: [''],
      linhagem: [''],
      arquetipo: [''],
      especializacao: [''],
      treinamentos: this.fb.array([this.fb.control('')])
    }),
    estatisticas: this.fb.group({
      nivel: [0],
      xp: [0],
      vida: this.criarAtualMaximo(),
      mana: this.criarAtualMaximo(),
      sanidade: this.criarAtualMaximo(),
      pontosAcao: this.criarAtualMaximo(),
      pontosReacao: this.criarAtualMaximo(),
      espacosMagia: this.criarAtualMaximo(),
      estatura: [''],
      iniciativa: [0],
      turnos: [0],
      status: [''],
      ca: [0],
      deslocamento: [0],
      bonusForca: [''],
      experienciaVsMorte: [0]
    }),
    atributos: this.fb.group({
      fisicos: this.fb.group({
        agilidade: this.criarAtributoPericia(),
        forca: this.criarAtributoPericia(),
        tamanho: this.criarAtributoPericia(),
        vigor: this.criarAtributoPericia()
      }),
      mentais: this.fb.group({
        carisma: this.criarAtributoPericia(),
        destreza: this.criarAtributoPericia(),
        inteligencia: this.criarAtributoPericia(),
        vontade: this.criarAtributoPericia()
      })
    }),
    pericias: this.fb.group({
      fisicas: this.fb.group({
        acrobacia: this.criarAtributoPericia(),
        atletismo: this.criarAtributoPericia(),
        combateADistancia: this.criarAtributoPericia(),
        combateACorpoACorpo: this.criarAtributoPericia(),
        percepcao: this.criarAtributoPericia(),
        pilotagem: this.criarAtributoPericia(),
        prestidigitacao: this.criarAtributoPericia(),
        sobrevivencia: this.criarAtributoPericia()
      }),
      mentais: this.fb.group({
        artes: this.criarAtributoPericia(),
        enganacao: this.criarAtributoPericia(),
        furtividade: this.criarAtributoPericia(),
        historia: this.criarAtributoPericia(),
        intuicao: this.criarAtributoPericia(),
        investigacao: this.criarAtributoPericia(),
        medicina: this.criarAtributoPericia(),
        primeirosSocorros: this.criarAtributoPericia(),
        psicologia: this.criarAtributoPericia(),
        tecnologia: this.criarAtributoPericia()
      }),
      magicas: this.fb.group({
        arcanismo: this.criarAtributoPericia(),
        ocultismo: this.criarAtributoPericia()
      })
    }),
    defesas: this.fb.group({
      fisicas: this.fb.group({
        balistico: [0],
        concussao: [0],
        cortante: [0],
        perfurante: [0]
      }),
      elementais: this.fb.group({
        acido: [0],
        agua: [0],
        ar: [0],
        eletrico: [0],
        energia: [0],
        fogo: [0],
        gelo: [0],
        luz: [0],
        sangue: [0],
        sombra: [0],
        terra: [0],
        veneno: [0]
      })
    }),
    ataques: this.fb.array([
      this.criarAtaque()
    ]),
    sobre: this.fb.group({
      prestigio: [0],
      afiliacao: [''],
      patente: [''],
      descricao: [''],
      traumas: ['']
    }),
    habilidades: this.fb.array([
      this.criarHabilidade()
    ]),
    inventario: this.fb.group({
      carga: this.criarAtualMaximo(),
      creditos: [0],
      itens: this.fb.array([
        this.criarItem()
      ])
    }),
    vestuario: this.fb.group({
      capacete: this.criarItem(),
      manto: this.criarItem(),
      peitoral: this.criarItem(),
      braceletes: this.criarItem(),
      calcas: this.criarItem(),
      botas: this.criarItem()
    })
  });

  // Accessors for arrays
  get formTreinamentos() { return this.fichaBaseForm.get('caracteristicas.treinamentos') as FormArray; }
  get formAtaques() { return this.fichaBaseForm.get('ataques') as FormArray; }
  get formHabilidades() { return this.fichaBaseForm.get('habilidades') as FormArray; }
  get formItens() { return this.fichaBaseForm.get('inventario.itens') as FormArray; }

  // Função utilitária para pegar dinamicamente o array de bônus do FormGroup de um AtributoPericia.
  getBonusArray(formGroupName: FormGroup): FormArray {
    return formGroupName.get('bonus') as FormArray;
  }
}
