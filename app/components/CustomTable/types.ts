import { TOrder } from '~types/order';
import { TProduct } from '~types/product';
import { TUser } from '~types/user';

type TTextFields = { textFields: (string | number)[] };

export type TProductTableContent = TTextFields &
  Pick<TProduct, 'imageUrl' | 'id' | 'sizes'> & {
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
    sizes?: never;
  };

type TUserTableContent = TTextFields &
  Pick<TUser, 'id' | 'imageUrl' | 'isAdmin' | 'email'> & {
    sizes?: never;
    isDelivered?: never;
    isPayed?: never;
  };

export type CustomTableProps = {
  columnHeaders: { desktop: string[]; mobile: string[] };
  tableContent: (TProductTableContent | TOrderTableContent | TUserTableContent)[];
  rowActions?: {
    delete: boolean;
    edit: boolean;
  };
};
