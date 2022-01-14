import { useState, useEffect } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import GoogleButton from '~components/GoogleButton';
import Modal from '~components/Modal';
import ModalBody from '~components/ModalBody';
import { useAuth } from '~hooks/useAuth';
import useCart from '~hooks/useCart';
import { TItem } from '~types/item';
import CartCard from '../CartCard';
import * as Styled from './styles';

function CartDetails() {
  const { isAuthenticated, signInWithGoogle } = useAuth();

  const { localStorageCart, itemsCount, totalCartAmt } = useCart();
  const [storedItems, setStoredItems] = useState<TItem[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // I had to resort to this in order to avoid the following error
  // Warning: Expected server HTML to contain a matching <div> in <div>.
  useEffect(() => {
    if (typeof window !== 'undefined') setStoredItems(localStorageCart);
  }, [localStorageCart]);

  return (
    <Styled.CartDetailsContainer>
      <div className="cartProdsWrapper">
        <CustomText
          size="big"
          weight="black"
          textTransform="uppercase"
          textAlign="left"
          className="heading"
        >
          Mi Carrito
        </CustomText>
        <div className="subheadings">
          <div>
            <CustomText
              as="span"
              size="regular"
              weight="regular"
              textTransform="uppercase"
              textAlign="left"
            >
              TOTAL ({`${itemsCount} ${itemsCount === 1 ? 'producto' : 'productos'}`})
            </CustomText>
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
            >
              {`$ ${totalCartAmt.toLocaleString('de-DE')}`}
            </CustomText>
          </div>
          <CustomButton
            size="small"
            weight="regular"
            textTransform="uppercase"
            noMaxWidth
            onClick={() => setShowLoginModal(true)}
          >
            Continuar
          </CustomButton>
        </div>
        {storedItems &&
          storedItems.map((item, i) => (
            <CartCard key={item.id} item={item} $isFirstItem={i === 0} />
          ))}
      </div>

      <Modal
        onClose={() => setShowLoginModal(false)}
        showModal={showLoginModal && !isAuthenticated}
        closeOnClickOutside
      >
        <ModalBody
          textHeading="Por favor, inicie sesión 🔑"
          textBody="Es necesario iniciar sesión con Google para poder generar una órden de compra."
        >
          <GoogleButton handleClick={() => signInWithGoogle(false)}>Iniciar sesión</GoogleButton>
        </ModalBody>
      </Modal>
    </Styled.CartDetailsContainer>
  );
}

export default CartDetails;
