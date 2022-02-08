import { FieldValue } from 'firebase/firestore';
import { TProduct, TProductSizes } from './product';

export type TOrderedProducts = {
  product: TProduct;
  quantity: number;
  size: TProductSizes;
};

export type TOrder = {
  buyerId: string;
  buyerName: string;
  createdAt: string;
  id: string;
  isDelivered: boolean;
  isPayed: boolean;
  orderedProducts: TOrderedProducts[];
  paymentId: string | null;
  timestamp: FieldValue;
};
