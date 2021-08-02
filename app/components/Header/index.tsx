import useWindowSize from '@hooks/useWindowSize';
import { SMALL_BR } from '@styles/variables';
import Logo from './components/Logo';
import ShoppingCartIcon from './components/ShoppingCartIcon';
import * as Styled from './styles';

function Header() {
  const { width } = useWindowSize();

  return (
    <Styled.HeaderContainer>
      <div className="header-left">
        <Logo />
        {width >= SMALL_BR && (
          <nav className="nav-container">
            <span className="nav-link">Colegios</span>
            <span className="nav-link">Categorías</span>
          </nav>
        )}
      </div>
      <button className="cart-icon" type="button">
        <ShoppingCartIcon />
      </button>
    </Styled.HeaderContainer>
  );
}

export default Header;
