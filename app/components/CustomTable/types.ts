import { TOrder } from '~types/order';
import { TProduct } from '~types/product';
import { TUser } from '~types/user';

type TTextFields = { textFields: (string | number)[] };

type TProductTableContent = TTextFields &
  Pick<TProduct, 'imageUrl' | 'id' | 'stockBySize'> & {
    email?: never;
    isAdmin?: never;
    isDelivered?: never;
    isPayed?: never;
  };

type TOrderTableContent = TTextFields &
  Pick<TOrder, 'id' | 'isDelivered' | 'isPayed'> & {
    email?: never;
    imageUrl?: never;
    isAdmin?: never;
    stockBySize?: never;
  };

type TUserTableContent = TTextFields &
  Pick<TUser, 'id' | 'imageUrl' | 'isAdmin' | 'email'> & {
    stockBySize?: never;
    isDelivered?: never;
    isPayed?: never;
  };

export type CustomTableProps = {
  columnHeaders: { propertyName: string; displayName: string }[];
  tableContent: (TProductTableContent | TOrderTableContent | TUserTableContent)[];
  rowActions?: {
    delete: boolean;
    edit: boolean;
  };
};
