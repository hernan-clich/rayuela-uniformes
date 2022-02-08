import { TProduct, TProductSizes } from './product';

export type TItem = {
  id: string;
  product: Omit<TProduct, 'sizes'>;
  price: number;
  quantity: number;
  size: TProductSizes;
};
