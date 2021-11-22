import AdminSidebar from '~components/AdminSidebar';
import * as Styled from './styles';

type Props = {
  children: React.ReactNode;
};

function PrivateLayout({ children }: Props) {
  return (
    <Styled.PrivateLayoutContainer>
      <AdminSidebar />
      <Styled.ChildrenContainer>{children}</Styled.ChildrenContainer>
    </Styled.PrivateLayoutContainer>
  );
}

export default PrivateLayout;
