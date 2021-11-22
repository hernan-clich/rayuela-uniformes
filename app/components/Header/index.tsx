import Link from 'next/link';
import PATHS from '~constants/paths';
import ShoppingCartIcon from '~components/Icons/ShoppingCartIcon';
import UserIcon from '~components/Icons/UserIcon';
import Logo from '~components/Logo';
import * as Styled from './styles';

function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLeft>
        <Logo />
      </Styled.HeaderLeft>
      <Styled.HeaderRight>
        <Link href={PATHS.AUTH}>
          <a>
            <UserIcon />
          </a>
        </Link>
        <Link href={PATHS.CART}>
          <a>
            <ShoppingCartIcon />
          </a>
        </Link>
      </Styled.HeaderRight>
    </Styled.HeaderContainer>
  );
}

export default Header;
