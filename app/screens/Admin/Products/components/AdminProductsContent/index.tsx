import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import * as Styled from './styles';

function AdminProductsContent() {
  return (
    <Styled.AdminProductsContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Productos
        </CustomText>
        <CustomButton size="small" weight="bold" noMaxWidth>
          Nuevo producto
        </CustomButton>
      </div>
    </Styled.AdminProductsContentContainer>
  );
}

export default AdminProductsContent;
