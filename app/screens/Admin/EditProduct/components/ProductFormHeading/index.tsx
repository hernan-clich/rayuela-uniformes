import CustomText from '~components/CustomText';
import * as Styled from './styles';

function ProductHeading() {
  return (
    <Styled.ProductHeadingContainer>
      <CustomText size="regular" weight="bold" textAlign="left">
        Agregar nuevo producto
      </CustomText>
    </Styled.ProductHeadingContainer>
  );
}

export default ProductHeading;
