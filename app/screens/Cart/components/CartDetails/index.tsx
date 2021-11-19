import { useState, useEffect } from 'react';
import CustomText from '~components/CustomText';
import useOrder from '~hooks/useOrder';
import { TOrder } from '~types/order';
import CartCard from '../CartCard';
import * as Styled from './styles';

function CartDetails() {
  const { localStorageCart } = useOrder();
  const [storedOrders, setStoredOrders] = useState<TOrder[]>([]);

  // I had to resort to this in order to avoid the following error
  // Warning: Expected server HTML to contain a matching <div> in <div>.
  useEffect(() => {
    if (typeof window !== 'undefined') setStoredOrders(localStorageCart);
  }, [localStorageCart]);

  return (
    <Styled.CartDetailsContainer>
      <div className="cartProdsWrapper">
        <CustomText size="regular" weight="black" textTransform="uppercase">
          Mi Carrito
        </CustomText>
        {storedOrders && storedOrders.map((order) => <CartCard key={order.id} order={order} />)}
      </div>
      <div className="detailsContainer">Details</div>
    </Styled.CartDetailsContainer>
  );
}

export default CartDetails;
