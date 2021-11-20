import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import useOrder from '~hooks/useOrder';
import { TOrder } from '~types/order';
import * as Styled from './styles';

type Props = {
  order: TOrder;
};

function CartCard({ order }: Props) {
  const { deleteOrder, setCurrentProductQuantity } = useOrder(order?.product?.id);

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
              {`$ ${order?.product?.price * order?.quantity}`}
            </CustomText>
          </div>
        </div>
        <div className="cartProdBottom">
          <QuantityCounter
            quantity={order?.quantity}
            localStorageQtyHandlers={{
              decrease: () => setCurrentProductQuantity('decr', order?.size),
              increase: () => setCurrentProductQuantity('incr', order?.size)
            }}
          />
        </div>
      </div>
      <CustomButton
        size="regular"
        weight="black"
        className="deleteButton"
        secondary
        onClick={() => deleteOrder(order?.id)}
      >
        ✕
      </CustomButton>
    </Styled.CartCardContainer>
  );
}

export default CartCard;
