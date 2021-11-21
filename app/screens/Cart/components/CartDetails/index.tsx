import { useState, useEffect } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import useOrder from '~hooks/useOrder';
import { TOrder } from '~types/order';
import CartCard from '../CartCard';
import * as Styled from './styles';

function CartDetails() {
  const { localStorageCart, productsCount, totalCartAmt } = useOrder();
  const [storedOrders, setStoredOrders] = useState<TOrder[]>([]);

  // I had to resort to this in order to avoid the following error
  // Warning: Expected server HTML to contain a matching <div> in <div>.
  useEffect(() => {
    if (typeof window !== 'undefined') setStoredOrders(localStorageCart);
  }, [localStorageCart]);

  return (
    <Styled.CartDetailsContainer>
      <div className="cartProdsWrapper">
        <CustomText
          size="big"
          weight="black"
          textTransform="uppercase"
          textAlign="left"
          className="heading"
        >
          Mi Carrito
        </CustomText>
        <div className="subheadings">
          <div>
            <CustomText
              as="span"
              size="regular"
              weight="regular"
              textTransform="uppercase"
              textAlign="left"
            >
              TOTAL ({`${productsCount} ${productsCount === 1 ? 'producto' : 'productos'}`})
            </CustomText>
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
            >
              {`$ ${totalCartAmt.toLocaleString('de-DE')}`}
            </CustomText>
          </div>
          <CustomButton size="small" weight="regular" textTransform="uppercase">
            Continuar
          </CustomButton>
        </div>
        {storedOrders &&
          storedOrders.map((order, i) => (
            <CartCard key={order.id} order={order} $isFirstItem={i === 0} />
          ))}
      </div>
    </Styled.CartDetailsContainer>
  );
}

export default CartDetails;
