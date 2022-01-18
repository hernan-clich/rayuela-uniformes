import { TSingleFilterItem } from '~types/general';

export enum ECategoryKeys {
  'tshirts',
  'pants',
  'socks'
}

export enum ECategoryValues {
  'Remeras',
  'Pantalones',
  'Medias'
}

export type TCategoryKeys = keyof typeof ECategoryKeys;
export type TCategoryValues = keyof typeof ECategoryValues;

export const CCategories: Record<TCategoryKeys, TCategoryValues> = {
  tshirts: 'Remeras',
  pants: 'Pantalones',
  socks: 'Medias'
};

export const CATEGORIES: TSingleFilterItem[] = [
  { alias: 'categories', id: 'tshirts', name: 'Remeras' },
  { alias: 'categories', id: 'pants', name: 'Pantalones' },
  { alias: 'categories', id: 'socks', name: 'Medias' }
];
