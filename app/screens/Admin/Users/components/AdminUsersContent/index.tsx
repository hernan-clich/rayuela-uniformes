import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import { useAuth } from '~hooks/useAuth';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TUser } from '~types/user';
import * as Styled from './styles';

const COLUMN_HEADERS = [
  {
    displayName: 'Avatar',
    propertyName: 'imageUrl'
  },
  {
    displayName: 'ID',
    propertyName: 'id'
  },
  {
    displayName: 'Nombre',
    propertyName: 'buyerName'
  },
  {
    displayName: 'Fecha de creación',
    propertyName: 'joinedSince'
  }
];

function AdminUsersContent() {
  const data = useDbSnapshot<TUser>('users');
  const tableContent = data?.map(({ id, imageUrl, name, joinedSince }) => ({
    id,
    imageUrl,
    textFields: [id, name, joinedSince]
  }));
  const { user } = useAuth();

  // @todo: This obviously doesn't belong here, make admins in the proper place
  const handleClick = async (req: { email: string }) => {
    const response = await fetch('/api/set-admin-role', {
      method: 'POST',
      body: JSON.stringify(req)
    });
    const data = await response.json();
    return data;
  };

  return (
    <Styled.AdminUsersContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Usuarios
        </CustomText>
        {/* @todo: Remove this stuff */}
        <button
          type="button"
          onClick={() =>
            handleClick({
              email: user?.email as string
            })
          }
        >
          Make admin
        </button>
      </div>
      <CustomTable columnHeaders={COLUMN_HEADERS} tableContent={tableContent} />
    </Styled.AdminUsersContentContainer>
  );
}

export default AdminUsersContent;
