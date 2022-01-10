import { useEffect, useState } from 'react';
import useLocalStorage from '~hooks/useLocalStorage';
import { TItem } from '~types/item';
import { TProductSizes } from '~types/product';

function useCart(productId = ''): {
  currentProductInCart: TItem;
  isCartEmpty: boolean;
  checkIfItemIsInCart: (currentSize: TProductSizes) => boolean;
  localStorageCart: TItem[];
  itemsCount: number;
  totalCartAmt: number;
  setCurrentProductQuantity: (action: 'incr' | 'decr' | number, currentSize: TProductSizes) => void;
  setNewItem: (item: TItem) => void;
  deleteItem: (itemId: string) => void;
} {
  const [localStorageCart, setLocalStorageCart] = useLocalStorage<TItem[]>('cart', []);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalCartAmt, setTotalCartAmt] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined')
      setItemsCount(() => localStorageCart.reduce((acc, item) => acc + item?.quantity, 0));
    setTotalCartAmt(() =>
      localStorageCart.reduce((acc, item) => acc + item?.product?.price * item?.quantity, 0)
    );
  }, [localStorageCart]);

  const isCartEmpty = Boolean(localStorageCart && !localStorageCart?.length);
  const [currentProductInCart] = !isCartEmpty
    ? localStorageCart?.filter(({ product }) => product?.id === productId)
    : [];
  const checkIfItemIsInCart = (currentSize: TProductSizes) =>
    Boolean(currentProductInCart) && currentProductInCart.size === currentSize;

  const setNewItem = (item: TItem) => setLocalStorageCart([...localStorageCart, item]);
  const deleteItem = (itemId: string) =>
    setLocalStorageCart(localStorageCart.filter((item) => item?.id !== itemId));
  const setCurrentProductQuantity = (
    action: 'incr' | 'decr' | number,
    currentSize: TProductSizes
  ): void => {
    setLocalStorageCart(
      localStorageCart.map((item) =>
        item?.product?.id === productId && item?.size === currentSize
          ? {
              ...item,
              quantity:
                typeof action === 'number'
                  ? action
                  : action === 'incr'
                  ? item?.quantity + 1
                  : action === 'decr'
                  ? item?.quantity - 1
                  : item?.quantity
            }
          : item
      )
    );
  };

  return {
    currentProductInCart,
    checkIfItemIsInCart,
    deleteItem,
    isCartEmpty,
    localStorageCart,
    itemsCount,
    setCurrentProductQuantity,
    setNewItem,
    totalCartAmt
  };
}

export default useCart;
