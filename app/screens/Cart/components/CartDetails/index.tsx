import CustomText from '~components/CustomText';
import useLocalStorage from '~hooks/useLocalStorage';
import { TOrder } from '~types/order';
import CartCard from '../CartCard';
import * as Styled from './styles';

function CartDetails() {
  const [localStorageCart] = useLocalStorage<TOrder[]>('cart', []);

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
