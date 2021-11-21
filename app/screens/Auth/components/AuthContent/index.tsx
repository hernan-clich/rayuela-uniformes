import { useState } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import GoogIcon from '~components/GoogIcon';
import * as Styled from './styles';

function AuthContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Styled.AuthContentContainer>
      <CustomText size="big" weight="regular" className="title">
        {isLoggedIn ? 'Iniciar sesión con Google' : 'Crear cuenta con Google'}
      </CustomText>
      <CustomButton size="regular" weight="regular">
        <div className="btnContents">
          <GoogIcon secondary />
          {isLoggedIn ? 'Iniciar sesión' : 'Crear cuenta'}
        </div>
      </CustomButton>
      <div className="togglerContainer">
        <CustomText as="span" size="xsmall" weight="regular">
          {isLoggedIn ? 'Todavía no tenes una cuenta?' : 'Ya tenes una cuenta?'}
        </CustomText>
        <CustomText
          as="span"
          size="xsmall"
          weight="black"
          onClick={() => setIsLoggedIn((prevState) => !prevState)}
        >
          {isLoggedIn ? 'Registrate!' : 'Inicia sesión'}
        </CustomText>
      </div>
    </Styled.AuthContentContainer>
  );
}

export default AuthContent;
