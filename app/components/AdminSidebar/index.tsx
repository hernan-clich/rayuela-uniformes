import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_CONTENT } from './constants';
import * as Styled from './styles';

function AdminSidebar() {
  const { asPath } = useRouter();

  return (
    <Styled.AdminSidebarContainer>
      <nav className="nav">
        {NAV_CONTENT.map(({ href, children }, i) => (
          <Link key={i} href={href}>
            <a className={clsx('icon', { current: asPath === href, hovered: asPath !== href })}>
              {children}
            </a>
          </Link>
        ))}
      </nav>
    </Styled.AdminSidebarContainer>
  );
}

export default AdminSidebar;
