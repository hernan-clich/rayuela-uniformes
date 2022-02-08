import { ESchools } from '~constants/schools';
import { ESingleFilterAlias } from '~types/general';

export type TFeaturedId = 'tshirts' | 'pants' | 'socks';
export type TFeaturedName = 'Remeras' | 'Pantalones' | 'Medias';

export type TFilterState = {
  [ESingleFilterAlias.categories]: string;
  [ESingleFilterAlias.school]: string;
};

export const CProductSizes = {
  '2': '2',
  '4': '4',
  '6': '6',
  '8': '8',
  '10': '10',
  '12': '12',
  '14': '14',
  '16': '16',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL'
};

export type TProductSizes = keyof typeof CProductSizes;

export type TProduct = {
  category: string;
  id: string;
  imageUrl: string;
  name: string;
  school: keyof typeof ESchools;
  sizes: {
    name: TProductSizes;
    price: number;
    stock: boolean;
  }[];
};
