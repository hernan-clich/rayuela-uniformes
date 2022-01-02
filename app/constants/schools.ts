import type { THomeItem } from '~types/home';

export enum ESchools {
  'ccdj' = 'Colegio Corazón de Jesús',
  'cesc' = 'Colegio Esclavas',
  'csml' = 'Instituto Santa María de Luján',
  'cl13' = 'Colegio León XIII',
  'generic' = 'generic'
}

export const SCHOOL_DATA: THomeItem[] = [
  {
    id: 'ccdj',
    name: 'Colegio Corazón de Jesús',
    img: '/assets/corazon_de_jesus.png',
    fontColor: 'secondary',
    asHtmlElement: 'h3'
  },
  {
    id: 'cesc',
    name: 'Colegio Esclavas',
    img: '/assets/colegio_esclavas.png',
    fontColor: 'secondary',
    asHtmlElement: 'h3'
  },
  {
    id: 'csml',
    name: 'Instituto Santa María de Luján',
    img: '/assets/santa_maria_de_lujan.png',
    fontColor: 'secondary',
    asHtmlElement: 'h3'
  },
  {
    id: 'cl13',
    name: 'Colegio León XIII',
    img: '/assets/colegio_leon_13.png',
    fontColor: 'secondary',
    asHtmlElement: 'h3'
  }
];
