import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import { MOCKED_PRODUCTS } from '~constants/products';
import { TProductSizes } from '~types/product';
import QuantityCounter from '../QuantityCounter';
import SizePicker from '../SizePicker';
import StockTag from '../StockTag';
import * as Styled from './styles';

function DetailsCard() {
  const router = useRouter();
  const { slug } = router.query;
  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState<TProductSizes>('2');

  const [currentProduct] = MOCKED_PRODUCTS.filter((product) => product.id === slug);
  const sizesArray = currentProduct
    ? (Object.keys(currentProduct.stockBySize) as TProductSizes[])
    : [];
  const [, doesCurrentSizeHaveStock] = currentProduct
    ? Object.entries(currentProduct?.stockBySize).filter((size) => size[0] === currentSize)[0]
    : [currentSize, false];

  // @todo: Do something useful here! ;)
  const handleSubmit = () => {
    console.log({
      currentSize,
      quantity,
      price: currentProduct?.price,
      total: currentProduct?.price * quantity
    });
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
          <CustomButton size="small" weight="regular" onClick={handleSubmit} className="submit">
            AGREGAR AL CARRITO
          </CustomButton>
        </div>
      </div>
    </Styled.DetailsCardContainer>
  );
}

export default DetailsCard;
