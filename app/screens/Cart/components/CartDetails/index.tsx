import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import StackableProductCard from '~components/StackableProductCard';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import GoogleButton from '~components/GoogleButton';
import Modal from '~components/Modal';
import ModalBody from '~components/ModalBody';
import PATHS from '~constants/paths';
import { useAuth } from '~hooks/useAuth';
import useCart from '~hooks/useCart';
import useDbCrud from '~hooks/useDbCrud';
import { EDbCollections } from '~types/db';
import { TItem } from '~types/item';
import { TOrderedProducts } from '~types/order';
import * as Styled from './styles';

function CartDetails() {
  const router = useRouter();
  const { isAuthenticated, signInWithGoogle, user } = useAuth();
  const { addDbDocument, timestamp } = useDbCrud(EDbCollections.orders);

  const { isCartEmpty, itemsCount, localStorageCart, setCartEmpty, totalCartAmt } = useCart();
  const parsedTotalCartAmt = `$ ${totalCartAmt.toLocaleString('es-AR')}`;
  const [storedItems, setStoredItems] = useState<TItem[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateOrderModal, setShowCreateOrderModal] = useState(false);
  const orderedProducts: TOrderedProducts[] = localStorageCart?.map(
    ({ product: { category, id, imageUrl, name, price, school }, quantity, size }) => ({
      product: { category, id, imageUrl, name, price, school },
      quantity,
      size
    })
  );

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
              className="prodsPrice"
            >
              {parsedTotalCartAmt}
            </CustomText>
          </div>
          {!isCartEmpty && (
            <CustomButton
              size="small"
              weight="regular"
              textTransform="uppercase"
              noMaxWidth
              onClick={() => {
                isAuthenticated ? setShowCreateOrderModal(true) : setShowLoginModal(true);
              }}
            >
              Continuar
            </CustomButton>
          )}
        </div>
        {storedItems &&
          storedItems.map((item, i) => (
            <StackableProductCard key={item.id} item={item} $isFirstItem={i === 0} />
          ))}
      </div>

      {/* This modal will be displayed when an unauthenticated user tries to create an order */}
      <Modal
        onClose={() => setShowLoginModal(false)}
        showModal={showLoginModal && !isAuthenticated}
        closeOnClickOutside
      >
        <ModalBody
          textHeading="Por favor, inicie sesión 🔑"
          textBody="Es necesario iniciar sesión con Google para poder generar una órden de compra."
        >
          <GoogleButton
            handleClick={() => {
              signInWithGoogle(false);
              setShowCreateOrderModal(true);
            }}
          >
            Iniciar sesión
          </GoogleButton>
        </ModalBody>
      </Modal>

      {/* This modal will be displayed to confirm an authenticated user's order creation */}
      <Modal
        onClose={() => setShowCreateOrderModal(false)}
        showModal={showCreateOrderModal && isAuthenticated}
        closeOnClickOutside
      >
        <ModalBody
          textHeading="Confirmación de orden de compra ✅"
          textBody={`¿Desea confirmar la creación de la orden de compra por ${parsedTotalCartAmt}?. 

          Tenga en cuenta que una vez confirmada la orden de compra, no podrá editarla.
          `}
          closeCta={{ text: 'Volver al carrito', handler: () => setShowCreateOrderModal(false) }}
          buttonCta={{
            text: 'Confirmar creación',
            handler: async () => {
              // @todo: Create a try/catch and render an error modal in case of error
              const response = await addDbDocument({
                buyerId: user?.uid || '',
                buyerName: user?.displayName || user?.email || '',
                createdAt: new Date().toISOString(),
                isDelivered: false,
                isPayed: false,
                orderedProducts,
                paymentId: null,
                timestamp
              });
              setCartEmpty();
              router.replace({ pathname: PATHS.ORDER, query: { id: response.id } });
            }
          }}
        />
      </Modal>
    </Styled.CartDetailsContainer>
  );
}

export default CartDetails;
