import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import GoogIcon from '~components/Icons/GoogIcon';
import { useAuth } from '~hooks/useAuth';
import * as Styled from './styles';

function AuthContent() {
  const { isAuthenticated, logout, signInWithGoogle } = useAuth();

  return (
    <Styled.AuthContentContainer>
      <CustomText size="big" weight="regular" className="title">
        {isAuthenticated ? 'Logueado' : 'Deslogueado'}
      </CustomText>

      {!isAuthenticated ? (
        <CustomButton size="regular" weight="regular" noMaxWidth onClick={() => signInWithGoogle()}>
          <div className="btnContents">
            <GoogIcon secondary />
            Iniciar sesión
          </div>
        </CustomButton>
      ) : (
        <CustomButton size="regular" weight="regular" noMaxWidth onClick={logout}>
          <div className="btnContents">
            <GoogIcon secondary />
            Logout
          </div>
        </CustomButton>
      )}
    </Styled.AuthContentContainer>
  );
}

export default AuthContent;
