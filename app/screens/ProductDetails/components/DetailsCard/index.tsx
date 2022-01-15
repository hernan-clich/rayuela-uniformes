import { useRouter } from 'next/router';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import useCart from '~hooks/useCart';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TProduct, TProductSizes } from '~types/product';
import SizePicker from '../SizePicker';
import StockTag from '../StockTag';
import * as Styled from './styles';

function DetailsCard() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentProduct] = useDbSnapshot<TProduct>('products', slug as string);
  const {
    currentProductInCart,
    isCartEmpty,
    checkIfItemIsInCart,
    setNewItem,
    setCurrentProductQuantity
  } = useCart(currentProduct?.id);
  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState<TProductSizes>('2');

  const isProductAlreadyInCart = checkIfItemIsInCart(currentSize);
  const sizesArray = currentProduct
    ? (Object.keys(currentProduct.stockBySize) as TProductSizes[])
    : [];
  const [, doesCurrentSizeHaveStock] = currentProduct
    ? Object.entries(currentProduct?.stockBySize).filter((size) => size[0] === currentSize)[0]
    : [currentSize, false];

  // If everything goes well, we're placing the current item into LS 'cart'
  // @todo: Open a modal confirming that the product was successfully added to the cart
  const handleSubmit = () => {
    // If the cart is empty or the product is not yet there, we're gonna add it
    if (isCartEmpty || !isProductAlreadyInCart) {
      setNewItem({ id: uuid(), product: currentProduct, quantity, size: currentSize });
    }
    // Else, if the product is already there, we'll just add the new quantity into the stored item
    else if (isProductAlreadyInCart) {
      setCurrentProductQuantity(currentProductInCart?.quantity + quantity, currentSize);
    }
  };

  return (
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
            {currentProduct ? `$ ${currentProduct?.price.toLocaleString('de-DE')}` : ''}
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
          {/* @todo: Let's disable this button when the product is out of stock  */}
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
  );
}

export default DetailsCard;
