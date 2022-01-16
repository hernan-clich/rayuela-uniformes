import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
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

  return (
    <Styled.AdminUsersContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Usuarios
        </CustomText>
      </div>
      <CustomTable columnHeaders={COLUMN_HEADERS} tableContent={tableContent} />
    </Styled.AdminUsersContentContainer>
  );
}

export default AdminUsersContent;
