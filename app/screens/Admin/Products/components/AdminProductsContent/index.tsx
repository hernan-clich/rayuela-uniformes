import Link from 'next/link';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import PATHS from '~constants/paths';
import * as Styled from './styles';

function AdminProductsContent() {
  return (
    <Styled.AdminProductsContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Productos
        </CustomText>
        <Link href={PATHS.ADMIN_ADD_NEW_PRODUCT}>
          <a>
            <CustomButton size="small" weight="bold" noMaxWidth>
              Nuevo producto
            </CustomButton>
          </a>
        </Link>
      </div>
    </Styled.AdminProductsContentContainer>
  );
}

export default AdminProductsContent;
