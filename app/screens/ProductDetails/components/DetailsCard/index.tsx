import { useRouter } from 'next/router';
import { useState } from 'react';
import CustomText from '~components/CustomText';
import { MOCKED_PRODUCTS } from '~constants/products';
import { TProductSizes } from '~types/product';
import StockTag from '../StockTag';
import * as Styled from './styles';

function DetailsCard() {
  const router = useRouter();
  const { slug } = router.query;
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
        </div>
      </div>
    </Styled.DetailsCardContainer>
  );
}

export default DetailsCard;
