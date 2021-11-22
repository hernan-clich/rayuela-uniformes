import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import GoogIcon from '~components/Icons/GoogIcon';
import { useAuth } from '~hooks/useAuth';
import * as Styled from './styles';

function AuthContent() {
  const { logout, signInWithGoogle } = useAuth();

  return (
    <Styled.AuthContentContainer>
      <CustomText size="big" weight="regular" className="title">
        Iniciar sesión con Google
      </CustomText>
      <CustomButton size="regular" weight="regular" onClick={signInWithGoogle}>
        <div className="btnContents">
          <GoogIcon secondary />
          Iniciar sesión
        </div>
      </CustomButton>
      {/* @todo: put this in a better place, maybe the header?? */}
      <CustomButton size="regular" weight="regular" onClick={logout}>
        <div className="btnContents">
          <GoogIcon secondary />
          Logout
        </div>
      </CustomButton>
    </Styled.AuthContentContainer>
  );
}

export default AuthContent;
