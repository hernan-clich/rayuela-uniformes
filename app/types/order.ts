import { TProduct, TProductSizes } from './product';

export type TOrder = {
  id: string;
  product: TProduct;
  quantity: number;
  size: TProductSizes;
};
