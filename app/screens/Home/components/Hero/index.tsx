import useWindowSize from '@hooks/useWindowSize';
import HeaderBox from '../HeaderBox';
import HeroContainer from './styles';

function Hero() {
  const { height, width } = useWindowSize();

  return (
    <HeroContainer bgImg="/assets/hero_img.png" height={height} width={width}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText="Lo último en uniformes"
        secondary
      />
    </HeroContainer>
  );
}

export default Hero;
