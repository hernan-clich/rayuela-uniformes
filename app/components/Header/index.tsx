import HeaderContainer from './styles';
import Logo from './components/Logo';
import ShoppingCartIcon from './components/ShoppingCartIcon';
import useWindowSize from '@hooks/useWindowSize';
import { SMALL_BR } from '@styles/variables';

function Header() {
  const { width } = useWindowSize();

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}

export default Header;
