import CustomText from '~components/CustomText';
import * as Styled from './styles';

function AddNewProductHeading() {
  return (
    <Styled.AddNewProductHeadingContainer>
      <CustomText size="regular" weight="bold" textAlign="left">
        Agregar nuevo producto
      </CustomText>
    </Styled.AddNewProductHeadingContainer>
  );
}

export default AddNewProductHeading;
