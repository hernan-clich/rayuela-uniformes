import type { THomeItem } from '~types/home';

export const FEATURED_DATA: THomeItem[] = [
  {
    id: 'tshirts',
    name: 'Remeras',
    img: '/assets/remeras.png',
    fontColor: 'primary',
    asHtmlElement: 'h4'
  },
  {
    id: 'pants',
    name: 'Pantalones',
    img: '/assets/pantalones.png',
    fontColor: 'secondary',
    asHtmlElement: 'h4'
  },
  {
    id: 'socks',
    name: 'Medias',
    img: '/assets/medias.png',
    fontColor: 'secondary',
    asHtmlElement: 'h4'
  }
];
