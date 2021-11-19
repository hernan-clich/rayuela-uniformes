import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import { MOCKED_PRODUCTS } from '~constants/products';
import useOrder from '~hooks/useOrder';
import { TProductSizes } from '~types/product';
import SizePicker from '../SizePicker';
import StockTag from '../StockTag';
import * as Styled from './styles';

function DetailsCard() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentProduct] = MOCKED_PRODUCTS.filter((product) => product.id === slug);
  const {
    currentProductInCart,
    isCartEmpty,
    isProductAlreadyInCart,
    restOfProducts,
    localStorageCart,
    setLocalStorageCart
  } = useOrder(currentProduct?.id);
  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState<TProductSizes>('2');

  const sizesArray = currentProduct
    ? (Object.keys(currentProduct.stockBySize) as TProductSizes[])
    : [];
  const [, doesCurrentSizeHaveStock] = currentProduct
    ? Object.entries(currentProduct?.stockBySize).filter((size) => size[0] === currentSize)[0]
    : [currentSize, false];

  // If everything goes well, we're placing the current order into LS 'cart'
  // @todo: Open the cart sidebar after an update has been made to the cart
  const handleSubmit = () => {
    // If the cart is empty or the product is not yet there, we're gonna add it
    if (isCartEmpty || !isProductAlreadyInCart) {
      setLocalStorageCart([
        ...localStorageCart,
        // @todo: Lets auto generate this with something like uuid
        { id: 'random-id', product: currentProduct, quantity, size: currentSize }
      ]);
    }
    // Else, if the product is already there, we'll just add the new quantity into the stored order
    else if (isProductAlreadyInCart) {
      setLocalStorageCart([
        ...restOfProducts,
        { ...currentProductInCart, quantity: currentProductInCart?.quantity + quantity }
      ]);
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
            {currentProduct?.name}
          </CustomText>
          <CustomText as="h2" size="big" weight="bold" className="price">
            {`$ ${currentProduct?.price.toLocaleString('de-DE')}`}
          </CustomText>
          <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
          <SizePicker
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            sizesArray={sizesArray}
          />
          {/* @todo: Let's disable this button when the product is out of stock  */}
          <CustomButton size="small" weight="regular" onClick={handleSubmit} className="submit">
            AGREGAR AL CARRITO
          </CustomButton>
        </div>
      </div>
    </Styled.DetailsCardContainer>
  );
}

export default DetailsCard;
