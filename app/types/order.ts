import { TProduct, TProductSizes } from './product';

export type TOrderedProducts = {
  product: Omit<TProduct, 'stockBySize'>;
  quantity: number;
  size: TProductSizes;
};

export type TOrder = {
  isDelivered: boolean;
  isPayed: boolean;
  id: string;
  orderedProducts: TOrderedProducts[];
};
