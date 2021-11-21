import Link from 'next/link';
import PATHS from '~constants/paths';
import Logo from './components/Logo';
import ShoppingCartIcon from './components/ShoppingCartIcon';
import UserIcon from './components/UserIcon';
import * as Styled from './styles';

function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLeft>
        <Logo />
      </Styled.HeaderLeft>
      <Styled.HeaderRight>
        {/* Change this to /login */}
        <Link href={PATHS.HOME}>
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
