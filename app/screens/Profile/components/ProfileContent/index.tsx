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
          {/* @todo: Put real join date here */}
          <CustomText as="h3" size="small" weight="regular">
            {`Miembro desde: ${new Date().toLocaleDateString('DE-de')}`}
          </CustomText>
          <GoogleButton handleClick={logout}>Logout</GoogleButton>
        </div>
      ) : (
        <GoogleButton handleClick={signInWithGoogle}>Log in</GoogleButton>
      )}
    </Styled.ProfileContentContainer>
  );
}

export default ProfileContent;
