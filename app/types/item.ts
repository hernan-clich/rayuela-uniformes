import { TProduct, TProductSizes } from './product';

export type TItem = {
  id: string;
  product: TProduct;
  quantity: number;
  size: TProductSizes;
};
