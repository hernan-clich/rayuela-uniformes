import Link from 'next/link';
import PATHS from '~constants/paths';
import SettingsIcon from '~components/Icons/SettingsIcon';
import ShoppingCartIcon from '~components/Icons/ShoppingCartIcon';
import UserIcon from '~components/Icons/UserIcon';
import Logo from '~components/Logo';
import { useAuth } from '~hooks/useAuth';
import * as Styled from './styles';

function Header() {
  const { isAdmin } = useAuth();

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLeft>
        <Logo />
      </Styled.HeaderLeft>
      <Styled.HeaderRight>
        <Link href={PATHS.CART}>
          <a>
            <ShoppingCartIcon />
          </a>
        </Link>
        <Link href={PATHS.PROFILE}>
          <a>
            <UserIcon />
          </a>
        </Link>
        {isAdmin && (
          <Link href={PATHS.ADMIN_PRODUCTS}>
            <a>
              <SettingsIcon />
            </a>
          </Link>
        )}
      </Styled.HeaderRight>
    </Styled.HeaderContainer>
  );
}

export default Header;
