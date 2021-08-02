import type { HomeItem } from '@interfaces/homeInterfaces';

export const FEATURED_DATA: HomeItem[] = [
  {
    id: 'remeras',
    name: 'Remeras',
    img: '/assets/remeras.png',
    fontColor: 'primary',
    asHtmlElement: 'h4'
  },
  {
    id: 'pantalones',
    name: 'Pantalones',
    img: '/assets/pantalones.png',
    fontColor: 'secondary',
    asHtmlElement: 'h4'
  },
  {
    id: 'medias',
    name: 'Medias',
    img: '/assets/medias.png',
    fontColor: 'secondary',
    asHtmlElement: 'h4'
  }
];
