import { useRouter } from 'next/router';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import Loading from '~components/Loading';
import Modal from '~components/Modal';
import ModalBody from '~components/ModalBody';
import QuantityCounter from '~components/QuantityCounter';
import PATHS from '~constants/paths';
import useCart from '~hooks/useCart';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TProduct, TProductSizes } from '~types/product';
import SizePicker from '../SizePicker';
import StockTag from '../StockTag';
import * as Styled from './styles';

enum EModalTypes {
  'NoDisplay' = '',
  'New' = 'New',
  'Existing' = 'Existing'
}

function DetailsCard() {
  const router = useRouter();
  const { slug } = router.query;
  const {
    data: [currentProduct]
  } = useDbSnapshot<TProduct>('products', slug as string);
  const { isCartEmpty, checkIfItemIsInCart, setNewItem } = useCart(currentProduct?.id);
  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState<TProductSizes>('2');
  const [modalType, setModalType] = useState<EModalTypes>(EModalTypes.NoDisplay);
  const isModalTypeNew = modalType === EModalTypes.New;
  const isModalTypeExisting = modalType === EModalTypes.Existing;

  const isProductAlreadyInCart = checkIfItemIsInCart(currentSize);
  const sizesArray = currentProduct
    ? (Object.keys(currentProduct.stockBySize) as TProductSizes[])
    : [];
  const [, doesCurrentSizeHaveStock] = currentProduct
    ? Object.entries(currentProduct?.stockBySize).filter((size) => size[0] === currentSize)[0]
    : [currentSize, false];

  // If everything goes well, we're placing the current item into LS 'cart'
  const handleSubmit = () => {
    // If the cart is empty or the product is not yet there, we're gonna add it
    if (isCartEmpty || !isProductAlreadyInCart) {
      setNewItem({ id: uuid(), product: currentProduct, quantity, size: currentSize });
      setModalType(EModalTypes.New);
    }
    // Else, if the product is already there, we'll let the user know with a modal
    else if (isProductAlreadyInCart) {
      setModalType(EModalTypes.Existing);
    }
  };

  if (!currentProduct) return <Loading />;

  return (
    <>
      <Styled.DetailsCardContainer>
        <div className="img">
          <img src={currentProduct?.imageUrl} alt={currentProduct?.name} />
        </div>
        <div className="detailsWrapper">
          <div className="details">
            <StockTag hasStock={doesCurrentSizeHaveStock} />
            <CustomText as="h1" size="big" weight="bold" className="name">
              {currentProduct?.name || ''}
            </CustomText>
            <CustomText as="h2" size="big" weight="bold" className="price">
              {currentProduct ? `$ ${currentProduct?.price.toLocaleString('es-AR')}` : ''}
            </CustomText>
            <QuantityCounter
              quantity={quantity}
              setQuantity={setQuantity}
              disableCounter={!doesCurrentSizeHaveStock}
            />
            <SizePicker
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
              sizesArray={sizesArray}
            />
            <CustomButton
              size="small"
              weight="regular"
              noMaxWidth
              disabled={!doesCurrentSizeHaveStock}
              onClick={handleSubmit}
            >
              AGREGAR AL CARRITO
            </CustomButton>
          </div>
        </div>
      </Styled.DetailsCardContainer>

      <Modal
        onClose={() => setModalType(EModalTypes.NoDisplay)}
        showModal={Boolean(modalType)}
        closeOnClickOutside
      >
        <ModalBody
          textHeading={
            isModalTypeNew
              ? 'Producto añadido al carrito! ✅'
              : isModalTypeExisting
              ? 'Producto existente en el carrito. 🛒'
              : ''
          }
          textBody={
            isModalTypeNew
              ? '¿Deseas ir al carrito a concretar tu compra?'
              : isModalTypeExisting
              ? `
                  Este producto ya se encontraba en tu carrito.
                  ¿Deseas removerlo o editar su cantidad?
                `
              : ''
          }
          closeCta={{
            handler: () => setModalType(EModalTypes.NoDisplay),
            text: 'Volver'
          }}
          linkCta={{ href: PATHS.CART, text: 'Ir al carrito' }}
        />
      </Modal>
    </>
  );
}

export default DetailsCard;
