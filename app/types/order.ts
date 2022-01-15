import { TProduct, TProductSizes } from './product';

export type TOrderedProducts = {
  product: Omit<TProduct, 'stockBySize'>;
  quantity: number;
  size: TProductSizes;
};

export type TOrder = {
  id: string;
  orderedProducts: TOrderedProducts[];
};
