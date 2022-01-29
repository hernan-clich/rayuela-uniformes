import useCart from '~hooks/useCart';
import CartDetails from '../CartDetails';
import CartEmpty from '../CartEmpty';

function CartContent() {
  const { isCartEmpty } = useCart();

  return <>{isCartEmpty ? <CartEmpty /> : <CartDetails />}</>;
}

export default CartContent;
