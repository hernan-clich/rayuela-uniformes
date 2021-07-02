import Logo from '@components/Logo';
import ShoppingCartIcon from '@components/ShoppingCartIcon';
import HeaderContainer from './styles';

function Header() {
  return (
    <HeaderContainer>
      <div className="header-left">
        <Logo />
        <nav className="nav-container">
          <span className="nav-link">Colegios</span>
          <span className="nav-link">Categorías</span>
        </nav>
      </div>
      <button className="cart-icon" type="button">
        <ShoppingCartIcon />
      </button>
    </HeaderContainer>
  );
}

export default Header;
