import Footer from '@components/Footer';
import Header from '@components/Header';
import * as Styled from './styles';

type Props = {
  children: React.ReactNode;
};

function PublicLayout({ children }: Props) {
  return (
    <Styled.PublicLayoutContainer>
      <Header />
      <Styled.ChildrenContainer>{children}</Styled.ChildrenContainer>
      <Footer />
    </Styled.PublicLayoutContainer>
  );
}

export default PublicLayout;
