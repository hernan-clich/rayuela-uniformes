import { useRouter } from 'next/router';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
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

type Props = {
  setIsCreatingOrder: Dispatch<SetStateAction<boolean>>;
};

function CartDetails({ setIsCreatingOrder }: Props) {
  const router = useRouter();
  const { isAuthenticated, signInWithGoogle, user } = useAuth();
  const { addDbDocument, timestamp } = useDbCrud(EDbCollections.orders);

  const { isCartEmpty, itemsCount, localStorageCart, setCartEmpty, totalCartAmt } = useCart();
  const parsedTotalCartAmt = `$ ${totalCartAmt.toLocaleString('es-AR')}`;
  const [storedItems, setStoredItems] = useState<TItem[]>([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateOrderModal, setShowCreateOrderModal] = useState(false);
  const orderedProducts: TOrderedProducts[] = localStorageCart?.map(
    ({ product: { category, id, imageUrl, name, school }, price, quantity, size }) => ({
      product: {
        category,
        id,
        imageUrl,
        name,
        school
      },
      price,
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
              Comprar
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
          textHeading="Por favor, inicie sesi??n ????"
          textBody="Es necesario iniciar sesi??n con Google para poder generar una ??rden de compra."
        >
          <GoogleButton
            handleClick={() => {
              signInWithGoogle(false);
              setShowCreateOrderModal(true);
            }}
          >
            Iniciar sesi??n
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
          textHeading="Confirmaci??n de orden de compra ???"
          textBody={`??Desea confirmar la creaci??n de la orden de compra por ${parsedTotalCartAmt}?. 

          Tenga en cuenta que una vez confirmada la orden de compra, no podr?? editarla.
          `}
          closeCta={{ text: 'Volver al carrito', handler: () => setShowCreateOrderModal(false) }}
          buttonCta={{
            text: 'Confirmar creaci??n',
            handler: async () => {
              // @todo: Create a catch and render an error modal in case of error
              setIsCreatingOrder(true);

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
