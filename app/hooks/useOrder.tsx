import { Dispatch, SetStateAction } from 'react';
import useLocalStorage from '~hooks/useLocalStorage';
import { TOrder } from '~types/order';

function useOrder(orderId = ''): {
  currentProductInCart: TOrder;
  isCartEmpty: boolean;
  isProductAlreadyInCart: boolean;
  restOfProducts: TOrder[];
  localStorageCart: TOrder[];
  setLocalStorageCart: Dispatch<SetStateAction<TOrder[]>>;
} {
  const [localStorageCart, setLocalStorageCart] = useLocalStorage<TOrder[]>('cart', []);

  const isCartEmpty = Boolean(localStorageCart && !localStorageCart?.length);
  const [currentProductInCart] = !isCartEmpty
    ? localStorageCart?.filter(({ product }) => product?.id === orderId)
    : [];
  const isProductAlreadyInCart = Boolean(currentProductInCart);
  const restOfProducts = !isCartEmpty
    ? localStorageCart?.filter(({ product }) => product?.id !== orderId)
    : [];

  return {
    isCartEmpty,
    currentProductInCart,
    isProductAlreadyInCart,
    restOfProducts,
    localStorageCart,
    setLocalStorageCart
  };
}

export default useOrder;
