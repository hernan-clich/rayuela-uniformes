import useCart from '~hooks/useCart';
import CartDetails from '../CartDetails';
import EmptyContentMessage from '../../../../components/EmptyContentMessage';
import PATHS from '~constants/paths';
import EmptyCartIcon from '~components/Icons/EmptyCartIcon';

function CartContent() {
  const { isCartEmpty } = useCart();

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
