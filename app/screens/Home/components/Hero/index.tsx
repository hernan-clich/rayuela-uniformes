import useWindowSize from '~hooks/useWindowSize';
import HeaderBox from '../HeaderBox';
import * as Styled from './styles';

function Hero() {
  const { height, width } = useWindowSize();

  return (
    <Styled.HeroContainer bgImg="/assets/hero_img.png" height={height} width={width}>
      <HeaderBox
        asHtmlElement="h1"
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText="Lo último en uniformes"
        secondary
      />
    </Styled.HeroContainer>
  );
}

export default Hero;
