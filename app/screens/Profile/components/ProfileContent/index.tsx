import CustomText from '~components/CustomText';
import GoogleButton from '~components/GoogleButton';
import { useAuth } from '~hooks/useAuth';
import * as Styled from './styles';

function ProfileContent() {
  const { isAuthenticated, signInWithGoogle, logout, user } = useAuth();

  return (
    <Styled.ProfileContentContainer>
      {isAuthenticated ? (
        <div className="headingContainer">
          {/* @todo: Put decent fallback pic here */}
          <img className="userPic" src={user?.photoURL || ''} alt={user?.displayName || 'User'} />
          <CustomText as="h2" size="big" weight="bold">
            {user?.displayName}
          </CustomText>
          <CustomText as="h3" size="small" weight="regular" className="memberSince">
            {`Miembro desde: ${new Date(user?.metadata?.creationTime as string).toLocaleDateString(
              'es-AR'
            )}`}
          </CustomText>
          <GoogleButton handleClick={logout}>Cerrar sesión</GoogleButton>
        </div>
      ) : (
        <GoogleButton handleClick={signInWithGoogle}>Log in</GoogleButton>
      )}
    </Styled.ProfileContentContainer>
  );
}

export default ProfileContent;
