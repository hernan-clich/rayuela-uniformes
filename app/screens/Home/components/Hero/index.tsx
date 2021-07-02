import HomeContainer from './styles';
import CustomText from '@components/CustomText';

function Hero() {
  return (
    <HomeContainer bgImg="/hero_img.png">
      <CustomText textTransform="uppercase" weight="black">
        Lo último en uniformes
      </CustomText>
    </HomeContainer>
  );
}

export default Hero;
