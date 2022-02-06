import CustomText from '~components/CustomText';
import FbIcon from '~components/Icons/FbIcon';
import EmailIcon from '~components/Icons/EmailIcon';
import GoogIcon from '~components/Icons/GoogIcon';
import WaIcon from '~components/Icons/WaIcon';
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
            © 2022 - Rayuela Uniformes
          </CustomText>
        </div>
      </Styled.FooterText>
      <Styled.FooterSocial>
        <a
          href="https://wa.me/5491160153529"
          rel="external noopener noreferrer"
          target="_blank"
          className="footerLink"
        >
          <WaIcon />
        </a>
        <a
          href="https://www.facebook.com/rayuelauniformes"
          rel="external noopener noreferrer"
          target="_blank"
          className="footerLink"
        >
          <FbIcon />
        </a>
        <a
          href="mailto: creacionesmsariablas@hotmail.com"
          rel="external noopener noreferrer"
          target="_blank"
          className="footerLink"
        >
          <EmailIcon />
        </a>
        <a
          href="https://www.google.com/search?q=Rayuela+Uniformes%2C+Maure%2C+Buenos+Aires&hl=es-419&tbm=lcl&sxsrf=APq-WBtubfEAQeQywulkwoyqmXY7KfSP4w%3A1644181059230&ei=QzYAYsjBDaPM1sQPkoykiAo&oq=rayuela+uniformes+maure&gs_l=psy-ab.1.1.0i512k1j38.9418.10077.0.10968.6.6.0.0.0.0.128.648.2j4.6.0....0...1c.1.64.psy-ab..0.6.648...35i39k1j0i512i263i20k1.0.VcTC7j8_jm8#rlfi=hd:;si:16196913284135525376,l,CiZSYXl1ZWxhIFVuaWZvcm1lcywgTWF1cmUsIEJ1ZW5vcyBBaXJlc1ouIiRyYXl1ZWxhIHVuaWZvcm1lcyBtYXVyZSBidWVub3MgYWlyZXMqBggCEAAQAZIBDXVuaWZvcm1fc3RvcmU,y,L5-YvjSOk6w;mv:[[-34.57169952268097,-58.44232232573697],[-34.57205947731903,-58.44275947426304]]"
          rel="external noopener noreferrer"
          target="_blank"
          className="footerLink"
        >
          <GoogIcon />
        </a>
      </Styled.FooterSocial>
    </Styled.FooterContainer>
  );
}

export default Footer;
