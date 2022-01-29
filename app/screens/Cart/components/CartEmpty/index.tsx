import Link from 'next/link';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import EmptyCartIcon from '~components/Icons/EmptyCartIcon';
import PATHS from '~constants/paths';
import * as Styled from './styles';

function CartEmpty() {
  return (
    <Styled.CartEmptyContainer>
      <EmptyCartIcon />
      <div className="cta">
        <CustomText as="h2" size="regular" weight="bold">
          El carrito se encuentra vacío
        </CustomText>
        <Link href={PATHS.PRODUCTS}>
          <CustomButton as="a" size="small" weight="regular" noMaxWidth>
            Ver productos
          </CustomButton>
        </Link>
      </div>
    </Styled.CartEmptyContainer>
  );
}

export default CartEmpty;
