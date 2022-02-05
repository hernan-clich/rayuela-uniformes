import useCart from '~hooks/useCart';
import CartDetails from '../CartDetails';
import EmptyContentMessage from '../../../../components/EmptyContentMessage';
import PATHS from '~constants/paths';
import EmptyCartIcon from '~components/Icons/EmptyCartIcon';
import { isServer } from '~constants/general';

function CartContent() {
  const { isCartEmpty } = useCart();

  if (isServer) return null;

  return (
    <>
      {isCartEmpty ? (
        <EmptyContentMessage
          icon={<EmptyCartIcon />}
          messages={{ cta: 'Ver productos', title: 'El carrito se encuentra vacío' }}
          redirectHref={PATHS.PRODUCTS}
        />
      ) : (
        <CartDetails />
      )}
    </>
  );
}

export default CartContent;
