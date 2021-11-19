import { Dispatch, SetStateAction } from 'react';
import useLocalStorage from '~hooks/useLocalStorage';
import { TOrder } from '~types/order';

function useOrder(id = ''): {
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
    ? localStorageCart?.filter(({ product }) => product.id === id)
    : [];
  const isProductAlreadyInCart = Boolean(currentProductInCart);
  const restOfProducts = isCartEmpty
    ? localStorageCart?.filter(({ product }) => product.id !== id)
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
