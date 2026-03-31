import { AtributoPericia } from '../genericos/atributoPericia';

export class Pericias {
  fisicas: {
    acrobacia: AtributoPericia;
    atletismo: AtributoPericia;
    combateADistancia: AtributoPericia;
    combateACorpoACorpo: AtributoPericia;
    percepcao: AtributoPericia;
    pilotagem: AtributoPericia;
    prestidigitacao: AtributoPericia;
    sobrevivencia: AtributoPericia;
  } = {
    acrobacia: new AtributoPericia(),
    atletismo: new AtributoPericia(),
    combateADistancia: new AtributoPericia(),
    combateACorpoACorpo: new AtributoPericia(),
    percepcao: new AtributoPericia(),
    pilotagem: new AtributoPericia(),
    prestidigitacao: new AtributoPericia(),
    sobrevivencia: new AtributoPericia(),
  };

  mentais: {
    artes: AtributoPericia;
    enganacao: AtributoPericia;
    furtividade: AtributoPericia;
    historia: AtributoPericia;
    intuicao: AtributoPericia;
    investigacao: AtributoPericia;
    medicina: AtributoPericia;
    primeirosSocorros: AtributoPericia;
    psicologia: AtributoPericia;
    tecnologia: AtributoPericia;
  } = {
    artes: new AtributoPericia(),
    enganacao: new AtributoPericia(),
    furtividade: new AtributoPericia(),
    historia: new AtributoPericia(),
    intuicao: new AtributoPericia(),
    investigacao: new AtributoPericia(),
    medicina: new AtributoPericia(),
    primeirosSocorros: new AtributoPericia(),
    psicologia: new AtributoPericia(),
    tecnologia: new AtributoPericia(),
  };

  magicas: {
    arcanismo: AtributoPericia;
    ocultismo: AtributoPericia;
  } = {
    arcanismo: new AtributoPericia(),
    ocultismo: new AtributoPericia(),
  };
}
