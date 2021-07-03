import CustomText from '@components/CustomText';
import useWindowSize from '@hooks/useWindowSize';
import HeroContainer from './styles';

function Hero() {
  const { height, width } = useWindowSize();

  return (
    <HeroContainer bgImg="/hero_img.png" height={height} width={width}>
      <CustomText textTransform="uppercase" weight="black" secondary>
        Lo último en uniformes
      </CustomText>
    </HeroContainer>
  );
}

export default Hero;
