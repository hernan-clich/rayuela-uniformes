import Header from '@components/Header';
import { PublicLayoutContainer, ChildrenContainer } from './styles';

type Props = {
  children: React.ReactNode;
};

function PublicLayout({ children }: Props) {
  return (
    <PublicLayoutContainer>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </PublicLayoutContainer>
  );
}

export default PublicLayout;
