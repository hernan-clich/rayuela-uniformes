import { Dispatch, SetStateAction } from 'react';
import useLocalStorage from '~hooks/useLocalStorage';
import { TOrder } from '~types/order';

function useOrder(productId = ''): {
  currentProductInCart: TOrder;
  isCartEmpty: boolean;
  isProductAlreadyInCart: boolean;
  restOfProducts: TOrder[];
  localStorageCart: TOrder[];
  setLocalStorageCart: Dispatch<SetStateAction<TOrder[]>>;
  setCurrentProductQuantity: (action: 'incr' | 'decr') => void;
} {
  const [localStorageCart, setLocalStorageCart] = useLocalStorage<TOrder[]>('cart', []);

  const isCartEmpty = Boolean(localStorageCart && !localStorageCart?.length);
  const [currentProductInCart] = !isCartEmpty
    ? localStorageCart?.filter(({ product }) => product?.id === productId)
    : [];
  const isProductAlreadyInCart = Boolean(currentProductInCart);
  const restOfProducts = !isCartEmpty
    ? localStorageCart?.filter(({ product }) => product?.id !== productId)
    : [];
  const setCurrentProductQuantity = (action: 'incr' | 'decr'): void => {
    setLocalStorageCart(
      localStorageCart.map((order) =>
        order?.product?.id === productId
          ? {
              ...order,
              quantity:
                action === 'incr'
                  ? order?.quantity + 1
                  : action === 'decr'
                  ? order?.quantity - 1
                  : order?.quantity
            }
          : order
      )
    );
  };

  return {
    isCartEmpty,
    currentProductInCart,
    isProductAlreadyInCart,
    restOfProducts,
    localStorageCart,
    setLocalStorageCart,
    setCurrentProductQuantity
  };
}

export default useOrder;
