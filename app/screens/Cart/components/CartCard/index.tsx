import { useState } from 'react';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import { TOrder } from '~types/order';
import * as Styled from './styles';

type Props = {
  order: TOrder;
};

function CartCard({ order: product }: Props) {
  const [quantity, setQuantity] = useState(product?.quantity);

  return (
    <Styled.CartCardContainer>
      <div className="imgContainer">
        <img src={product?.product?.imageUrl} alt={product?.product?.name || 'Producto'} />
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
              {product?.product?.name}
            </CustomText>
            <CustomText
              as="span"
              size="small"
              weight="regular"
              textAlign="left"
              textTransform="uppercase"
            >
              {`Talle: ${product?.size}`}
            </CustomText>
          </div>
          <div className="topRight">
            <CustomText as="span" size="regular" weight="bold" textTransform="uppercase">
              {`$ ${product?.product?.price * quantity}`}
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
