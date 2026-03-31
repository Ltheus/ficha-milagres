import { AtributoPericia } from '../genericos/atributoPericia';

export class Atributos {
  fisicos: {
    agilidade: AtributoPericia;
    forca: AtributoPericia;
    tamanho: AtributoPericia;
    vigor: AtributoPericia;
  } = {
    agilidade: new AtributoPericia(),
    forca: new AtributoPericia(),
    tamanho: new AtributoPericia(),
    vigor: new AtributoPericia(),
  };

  mentais: {
    carisma: AtributoPericia;
    destreza: AtributoPericia;
    inteligencia: AtributoPericia;
    vontade: AtributoPericia;
  } = {
    carisma: new AtributoPericia(),
    destreza: new AtributoPericia(),
    inteligencia: new AtributoPericia(),
    vontade: new AtributoPericia(),
  };
}
