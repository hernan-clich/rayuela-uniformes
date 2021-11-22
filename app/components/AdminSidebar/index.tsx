import Link from 'next/link';
import HomeIcon from '~components/Icons/HomeIcon';
import OrdersIcon from '~components/Icons/OrdersIcon';
import ProductsIcon from '~components/Icons/ProductsIcon';
import UsersIcon from '~components/Icons/UsersIcon';
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
