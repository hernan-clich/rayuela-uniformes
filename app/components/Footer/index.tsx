import CustomText from '~components/CustomText';
import FbIcon from './components/FbIcon';
import EmailIcon from './components/EmailIcon';
import GoogIcon from './components/GoogIcon';
import WaIcon from './components/WaIcon';
import * as Styled from './styles';

function Footer() {
  return (
    <Styled.FooterContainer>
      <Styled.FooterText>
        <div>
          <CustomText as="small" size="small" textAlign="left" weight="bold">
            creacionesmsariablas@hotmail.com
          </CustomText>
          <CustomText as="small" size="small" textAlign="left" weight="bold">
            +54 11 5123 4567
          </CustomText>
        </div>
        <div>
          <CustomText as="small" size="small" textAlign="left" weight="regular">
            Maure 2453, C1426
          </CustomText>
          <CustomText as="small" size="small" textAlign="left" weight="regular">
            Ciudad Autónoma de Buenos Aires
          </CustomText>
        </div>
        <div>
          <CustomText as="small" size="small" textAlign="left" weight="regular">
            © 2021 - Rayuela Uniformes
          </CustomText>
        </div>
      </Styled.FooterText>
      <Styled.FooterSocial>
        <WaIcon />
        <FbIcon />
        <EmailIcon />
        <GoogIcon />
      </Styled.FooterSocial>
    </Styled.FooterContainer>
  );
}

export default Footer;
