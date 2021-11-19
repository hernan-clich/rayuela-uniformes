import { useState } from 'react';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import useLocalStorage from '~hooks/useLocalStorage';
import { TOrder } from '~types/order';
import * as Styled from './styles';

function CartDetails() {
  const [localStorageCart] = useLocalStorage<TOrder[]>('cart', []);
  const [firstProd] = localStorageCart;
  const [quantity, setQuantity] = useState(firstProd?.quantity);

  return (
    <Styled.CartDetailsContainer>
      <div className="cartProdsWrapper">
        <CustomText size="regular" weight="black" textTransform="uppercase">
          Mi Carrito
        </CustomText>
        <div className="cartProdsContainer">
          <div className="imgContainer">
            <img src={firstProd?.product?.imageUrl} alt={firstProd?.product?.name || 'Producto'} />
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
                  {firstProd?.product?.name}
                </CustomText>
                <CustomText
                  as="span"
                  size="small"
                  weight="regular"
                  textAlign="left"
                  textTransform="uppercase"
                >
                  {`Talle: ${firstProd?.size}`}
                </CustomText>
              </div>
              <div className="topRight">
                <CustomText as="span" size="regular" weight="bold" textTransform="uppercase">
                  {`$ ${firstProd?.product?.price * quantity}`}
                </CustomText>
              </div>
            </div>
            <div className="cartProdBottom">
              <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
        </div>
      </div>
      <div className="detailsContainer">Details</div>
    </Styled.CartDetailsContainer>
  );
}

export default CartDetails;
