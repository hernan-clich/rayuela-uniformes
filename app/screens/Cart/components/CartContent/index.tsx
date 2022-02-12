import { useState } from 'react';
import EmptyContentMessage from '~components/EmptyContentMessage';
import EmptyCartIcon from '~components/Icons/EmptyCartIcon';
import Loading from '~components/Loading';
import { isServer } from '~constants/general';
import PATHS from '~constants/paths';
import useCart from '~hooks/useCart';
import CartDetails from '../CartDetails';

function CartContent() {
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);
  const { isCartEmpty } = useCart();

  if (isServer) return null;

  if (isCreatingOrder) return <Loading />;

  return (
    <>
      {isCartEmpty ? (
        <EmptyContentMessage
          icon={<EmptyCartIcon />}
          messages={{ cta: 'Ver productos', title: 'El carrito se encuentra vacío' }}
          redirectHref={PATHS.PRODUCTS}
        />
      ) : (
        <CartDetails setIsCreatingOrder={setIsCreatingOrder} />
      )}
    </>
  );
}

export default CartContent;
