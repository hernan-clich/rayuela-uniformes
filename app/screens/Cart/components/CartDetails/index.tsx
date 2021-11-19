import CustomText from '~components/CustomText';
import useOrder from '~hooks/useOrder';
import CartCard from '../CartCard';
import * as Styled from './styles';

function CartDetails() {
  const { localStorageCart } = useOrder();

  return (
    <Styled.CartDetailsContainer>
      <div className="cartProdsWrapper">
        <CustomText size="regular" weight="black" textTransform="uppercase">
          Mi Carrito
        </CustomText>
        {localStorageCart &&
          localStorageCart.map((order) => <CartCard key={order.id} order={order} />)}
      </div>
      <div className="detailsContainer">Details</div>
    </Styled.CartDetailsContainer>
  );
}

export default CartDetails;
