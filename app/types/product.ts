import { ESingleFilterAlias } from '~types/general';

export type TFilterState = {
  [ESingleFilterAlias.categories]: string;
  [ESingleFilterAlias.school]: string;
};

export enum EProductSizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
}

export type TProductSizes = keyof typeof EProductSizes;

export type TProduct = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  school: string;
  stockBySize: {
    [key in EProductSizes]: boolean;
  };
};
