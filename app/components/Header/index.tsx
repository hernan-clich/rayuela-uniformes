import Link from 'next/link';
import PATHS from '~constants/paths';
import Logo from './components/Logo';
import ShoppingCartIcon from './components/ShoppingCartIcon';
import * as Styled from './styles';

function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLeft>
        <Logo />
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
