import { motion } from 'framer-motion';
import PATHS from '~constants/paths';
import useWindowSize from '~hooks/useWindowSize';
import HeaderBox from '../HeaderBox';
import * as Styled from './styles';

const MotionStyledHeroContainer = motion(Styled.HeroContainer);

function Hero() {
  const { height, width } = useWindowSize();

  return (
    <MotionStyledHeroContainer
      bgImg="/assets/hero_img.png"
      height={height}
      width={width}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
    >
      <HeaderBox
        asHtmlElement="h1"
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText="Lo último en uniformes"
        path={{ pathname: PATHS.PRODUCTS }}
        secondary
      />
    </MotionStyledHeroContainer>
  );
}

export default Hero;
