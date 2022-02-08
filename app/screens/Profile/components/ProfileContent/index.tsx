import { useMemo } from 'react';
import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import EmptyContentMessage from '~components/EmptyContentMessage';
import GoogleButton from '~components/GoogleButton';
import LoginIcon from '~components/Icons/LoginIcon';
import Loading from '~components/Loading';
import { useAuth } from '~hooks/useAuth';
import useDbSnapshot, { TCustomQuery } from '~hooks/useDbSnapshot';
import { TOrder } from '~types/order';
import * as Styled from './styles';

const COLUMN_HEADERS = {
  desktop: ['ID', 'Fecha', 'Monto', 'Pago', 'Entrega', 'Ver'],
  mobile: ['ID', 'Fecha', 'Monto']
};

function ProfileContent() {
  const { isAuthenticated, signInWithGoogle, logout, user } = useAuth();
  const customOrderQuery: TCustomQuery = useMemo(() => {
    return [{ fieldPath: 'buyerId', opStr: '==', value: user?.uid || '' }];
  }, [user]);

  const { data: orderList, loading } = useDbSnapshot<TOrder>({
    collectionName: 'orders',
    customQuery: customOrderQuery
  });
  const tableContent = orderList?.map(
    ({ createdAt, id, isDelivered, isPayed, orderedProducts }) => ({
      id,
      isDelivered,
      isPayed,
      textFields: [
        id,
        new Date(createdAt)?.toLocaleDateString('es-AR') || createdAt,
        `$ ${orderedProducts
          .reduce((acc, order) => acc + order.price * order.quantity, 0)
          .toLocaleString('es-AR')}`
      ]
    })
  );

  if (loading && isAuthenticated) return <Loading />;

  return (
    <Styled.ProfileContentContainer>
      {isAuthenticated ? (
        <>
          <div className="headingContainer">
            <img
              className="userPic"
              src={user?.photoURL || '/assets/user_placeholder.png'}
              alt={user?.displayName || 'User'}
            />
            <CustomText as="h2" size="big" weight="bold">
              {user?.displayName}
            </CustomText>
            <CustomText as="h3" size="small" weight="regular" className="memberSince">
              {`Miembro desde: ${new Date(
                user?.metadata?.creationTime as string
              ).toLocaleDateString('es-AR')}`}
            </CustomText>
            <GoogleButton handleClick={logout}>Cerrar sesión</GoogleButton>
          </div>
          {Boolean(tableContent?.length) && (
            <div className="tableContainer">
              <CustomText as="h4" size="regular" weight="bold">
                Tus ordenes
              </CustomText>
              <CustomTable columnHeaders={COLUMN_HEADERS} tableContent={tableContent} />
            </div>
          )}
        </>
      ) : (
        <EmptyContentMessage
          icon={<LoginIcon />}
          messages={{
            title: 'Debes iniciar sesión para ver este contenido'
          }}
          customButton={<GoogleButton handleClick={signInWithGoogle}>Iniciar sesión</GoogleButton>}
        />
      )}
    </Styled.ProfileContentContainer>
  );
}

export default ProfileContent;
