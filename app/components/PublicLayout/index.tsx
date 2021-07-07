import Footer from '@components/Footer';
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
      <Footer />
    </PublicLayoutContainer>
  );
}

export default PublicLayout;
