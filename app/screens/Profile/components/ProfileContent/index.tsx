import CustomText from '~components/CustomText';
import { useAuth } from '~hooks/useAuth';
import * as Styled from './styles';

function ProfileContent() {
  const { isAuthenticated, user } = useAuth();

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
        </div>
      ) : (
        <CustomText as="span" size="big" weight="bold">
          unauth
        </CustomText>
      )}
    </Styled.ProfileContentContainer>
  );
}

export default ProfileContent;
