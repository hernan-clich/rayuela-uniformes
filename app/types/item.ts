import { TProduct, TProductSizes } from './product';

export type TItem = {
  id: string;
  product: Omit<TProduct, 'stockBySize'>;
  quantity: number;
  size: TProductSizes;
};
