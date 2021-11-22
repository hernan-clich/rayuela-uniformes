import Link from 'next/link';
import HomeIcon from '~components/HomeIcon';
import OrdersIcon from '~components/OrdersIcon';
import ProductsIcon from '~components/ProductsIcon';
import UsersIcon from '~components/UsersIcon';
import PATHS from '~constants/paths';
import * as Styled from './styles';

function AdminSidebar() {
  return (
    <Styled.AdminSidebarContainer>
      <nav className="nav">
        <Link href={PATHS.HOME}>
          <a>
            <HomeIcon />
          </a>
        </Link>
        <Link href={PATHS.ADMIN_ORDERS}>
          <a>
            <OrdersIcon />
          </a>
        </Link>
        <Link href={PATHS.ADMIN_PRODUCTS}>
          <a>
            <ProductsIcon />
          </a>
        </Link>
        <Link href={PATHS.ADMIN_USERS}>
          <a>
            <UsersIcon />
          </a>
        </Link>
      </nav>
    </Styled.AdminSidebarContainer>
  );
}

export default AdminSidebar;
