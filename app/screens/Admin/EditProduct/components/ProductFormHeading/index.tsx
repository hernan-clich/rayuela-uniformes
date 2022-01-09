import { useRouter } from 'next/router';
import CustomText from '~components/CustomText';
import * as Styled from './styles';

function ProductHeading() {
  const router = useRouter();
  const { id: productId } = router.query;

  return (
    <Styled.ProductHeadingContainer>
      <CustomText size="regular" weight="bold" textAlign="left">
        {productId ? 'Editar producto' : 'Agregar nuevo producto'}
      </CustomText>
    </Styled.ProductHeadingContainer>
  );
}

export default ProductHeading;
