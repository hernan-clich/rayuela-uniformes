import { ReactNode } from 'react';
import HomeIcon from '~components/Icons/HomeIcon';
import OrdersIcon from '~components/Icons/OrdersIcon';
import ProductsIcon from '~components/Icons/ProductsIcon';
import UsersIcon from '~components/Icons/UsersIcon';
import PATHS from '~constants/paths';

export const NAV_CONTENT: {
  children: ReactNode;
  href: string;
}[] = [
  {
    children: <HomeIcon />,
    href: PATHS.HOME
  },
  {
    children: <ProductsIcon />,
    href: PATHS.ADMIN_PRODUCTS
  },
  {
    children: <OrdersIcon />,
    href: PATHS.ADMIN_ORDERS
  },
  {
    children: <UsersIcon />,
    href: PATHS.ADMIN_USERS
  }
];
