import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import Loading from '~components/Loading';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TUser } from '~types/user';
import * as Styled from './styles';

const COLUMN_HEADERS = {
  desktop: ['Avatar', 'ID', 'Nombre', 'Fecha de creación', 'Tipo'],
  mobile: ['ID', 'Nombre', 'Fecha']
};

function AdminUsersContent() {
  const { data } = useDbSnapshot<TUser>({ collectionName: 'users' });
  const tableContent = data?.map(({ id, imageUrl, isAdmin, email, name, joinedSince }) => ({
    id,
    email,
    imageUrl,
    isAdmin,
    textFields: [id, name, new Date(joinedSince)?.toLocaleDateString('es-AR') || joinedSince]
  }));

  if (!data?.length) return <Loading />;

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
