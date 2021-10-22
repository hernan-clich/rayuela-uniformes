import type { THomeItem } from '~types/home';

export const FEATURED_DATA: THomeItem[] = [
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
