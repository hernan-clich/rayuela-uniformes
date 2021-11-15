import Link from 'next/link';
import CustomText from '~components/CustomText';
import PATHS from '~constants/paths';
import useWindowSize from '~hooks/useWindowSize';
import { SMALL_BR } from '~styles/variables';
import Logo from './components/Logo';
import ShoppingCartIcon from './components/ShoppingCartIcon';
import * as Styled from './styles';

function Header() {
  const { width } = useWindowSize();

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLeft>
        <Logo />
        {width >= SMALL_BR && (
          <Styled.NavContainer>
            <CustomText as="span" size="small" textTransform="uppercase" weight="bold">
              Colegios
            </CustomText>
            <CustomText as="span" size="small" textTransform="uppercase" weight="bold">
              Categorías
            </CustomText>
          </Styled.NavContainer>
        )}
      </Styled.HeaderLeft>
      <Link href={PATHS.CART}>
        <a>
          <ShoppingCartIcon />
        </a>
      </Link>
    </Styled.HeaderContainer>
  );
}

export default Header;
