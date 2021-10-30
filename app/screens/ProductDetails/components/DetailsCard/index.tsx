import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import { MOCKED_PRODUCTS } from '~constants/products';
import { TProductSizes } from '~types/product';
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

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentSize(e.target.value as TProductSizes);
  const handleQuantityClick = (action: 'incr' | 'decr') => {
    // The quantity should never be less than 1
    if (action === 'decr' && quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
    else if (action === 'incr') setQuantity((prevQuantity) => prevQuantity + 1);
  };
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
          <CustomText as="span" size="small" weight="regular">
            CANTIDAD
          </CustomText>
          <div>
            <button className="counter" onClick={() => handleQuantityClick('decr')}>
              -
            </button>
            <CustomText as="span" size="big" weight="regular" className="quantity">
              {quantity}
            </CustomText>
            <button className="counter" onClick={() => handleQuantityClick('incr')}>
              +
            </button>
          </div>
          <CustomText as="label" htmlFor="size" size="small" weight="regular">
            TALLE
          </CustomText>
          <select
            name="size"
            id="size"
            className="sizeSelect"
            value={currentSize}
            onChange={handleSizeChange}
            onBlur={handleSizeChange}
          >
            <optgroup label="TALLE">
              {sizesArray.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </optgroup>
          </select>
          <CustomButton size="small" weight="regular" onClick={handleSubmit} className="submit">
            AGREGAR AL CARRITO
          </CustomButton>
        </div>
      </div>
    </Styled.DetailsCardContainer>
  );
}

export default DetailsCard;
