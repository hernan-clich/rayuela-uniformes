import useLocalStorage from '~hooks/useLocalStorage';
import { TOrder } from '~types/order';
import { TProductSizes } from '~types/product';

function useOrder(productId = ''): {
  currentProductInCart: TOrder;
  isCartEmpty: boolean;
  checkIfProductIsInCart: (currentSize: TProductSizes) => boolean;
  localStorageCart: TOrder[];
  setCurrentProductQuantity: (action: 'incr' | 'decr' | number) => void;
  setNewOrder: (product: TOrder) => void;
} {
  const [localStorageCart, setLocalStorageCart] = useLocalStorage<TOrder[]>('cart', []);

  const isCartEmpty = Boolean(localStorageCart && !localStorageCart?.length);
  const [currentProductInCart] = !isCartEmpty
    ? localStorageCart?.filter(({ product }) => product?.id === productId)
    : [];
  const checkIfProductIsInCart = (currentSize: TProductSizes) =>
    Boolean(currentProductInCart) && currentProductInCart.size === currentSize;
  const setNewOrder = (product: TOrder) => {
    setLocalStorageCart([...localStorageCart, product]);
  };
  const setCurrentProductQuantity = (action: 'incr' | 'decr' | number): void => {
    setLocalStorageCart(
      localStorageCart.map((order) =>
        order?.product?.id === productId
          ? {
              ...order,
              quantity:
                typeof action === 'number'
                  ? action
                  : action === 'incr'
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
    checkIfProductIsInCart,
    localStorageCart,
    setCurrentProductQuantity,
    setNewOrder
  };
}

export default useOrder;
