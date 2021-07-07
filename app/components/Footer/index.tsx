import CustomText from '@components/CustomText';
import FbIcon from './components/FbIcon';
import EmailIcon from './components/EmailIcon';
import GoogIcon from './components/GoogIcon';
import WaIcon from './components/WaIcon';
import FooterContainer from './styles';

function Footer() {
  return (
    <FooterContainer>
      <div>
        <div>
          <div>
            <CustomText size="small" textAlign="left" weight="bold">
              creacionesmsariablas@hotmail.com
            </CustomText>
            <CustomText size="small" textAlign="left" weight="bold">
              +54 11 5123 4567
            </CustomText>
          </div>
          <div>
            <CustomText size="small" textAlign="left" weight="regular">
              Maure 2453, C1426
            </CustomText>
            <CustomText size="small" textAlign="left" weight="regular">
              Ciudad Autónoma de Buenos Aires
            </CustomText>
          </div>
        </div>
        <div>
          <CustomText size="small" textAlign="left" weight="regular">
            © 2021 - Rayuela Uniformes
          </CustomText>
        </div>
      </div>
      <div>
        <WaIcon />
        <FbIcon />
        <EmailIcon />
        <GoogIcon />
      </div>
    </FooterContainer>
  );
}

export default Footer;
