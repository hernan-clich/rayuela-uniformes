import { useRouter } from 'next/router';
import CustomText from '~components/CustomText';
import { MOCKED_PRODUCTS } from '~constants/products';
import StockTag from '../StockTag';
import * as Styled from './styles';

function DetailsCard() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentProduct] = MOCKED_PRODUCTS.filter((product) => product.id === slug);

  return (
    <Styled.DetailsCardContainer>
      <div className="img">
        <img src={currentProduct?.imageUrl} alt={currentProduct?.name} />
      </div>
      <div className="detailsWrapper">
        <div className="details">
          {/* @todo: Pass a real boolean here! */}
          <StockTag hasStock={false} />
          <CustomText as="h1" size="big" weight="bold">
            {currentProduct?.name}
          </CustomText>
        </div>
      </div>
    </Styled.DetailsCardContainer>
  );
}

export default DetailsCard;
