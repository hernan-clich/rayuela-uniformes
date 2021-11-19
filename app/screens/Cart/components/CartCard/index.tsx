import { useEffect, useState } from 'react';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import useOrder from '~hooks/useOrder';
import { TOrder } from '~types/order';
import * as Styled from './styles';

type Props = {
  order: TOrder;
};

function CartCard({ order }: Props) {
  const { currentProductInCart, restOfProducts, setLocalStorageCart } = useOrder(
    order?.product?.id
  );
  const [quantity, setQuantity] = useState(order?.quantity);

  // Update LS cart after every quantity change
  useEffect(() => {
    setLocalStorageCart([...restOfProducts, { ...currentProductInCart, quantity }]);
  }, [currentProductInCart, restOfProducts, setLocalStorageCart, quantity]);

  return (
    <Styled.CartCardContainer>
      <div className="imgContainer">
        <img src={order?.product?.imageUrl} alt={order?.product?.name || 'Producto'} />
      </div>
      <div className="cartProd">
        <div className="cartProdTop">
          <div className="topLeft">
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textAlign="left"
              textTransform="uppercase"
            >
              {order?.product?.name}
            </CustomText>
            <CustomText
              as="span"
              size="small"
              weight="regular"
              textAlign="left"
              textTransform="uppercase"
            >
              {`Talle: ${order?.size}`}
            </CustomText>
          </div>
          <div className="topRight">
            <CustomText as="span" size="regular" weight="bold" textTransform="uppercase">
              {`$ ${order?.product?.price * quantity}`}
            </CustomText>
          </div>
        </div>
        <div className="cartProdBottom">
          <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
    </Styled.CartCardContainer>
  );
}

export default CartCard;
