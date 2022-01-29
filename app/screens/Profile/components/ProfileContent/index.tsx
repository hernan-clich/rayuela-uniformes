import { useMemo } from 'react';
import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import GoogleButton from '~components/GoogleButton';
import Loading from '~components/Loading';
import { useAuth } from '~hooks/useAuth';
import useDbSnapshot, { TCustomQuery } from '~hooks/useDbSnapshot';
import { TOrder } from '~types/order';
import * as Styled from './styles';

const COLUMN_HEADERS = [
  {
    displayName: 'ID',
    propertyName: 'id'
  },
  {
    displayName: 'Fecha',
    propertyName: 'createdAt'
  },
  {
    displayName: 'Monto',
    propertyName: 'totalOrderAmt'
  },
  {
    displayName: 'Pago',
    propertyName: 'isPayed'
  },
  {
    displayName: 'Entrega',
    propertyName: 'isDelivered'
  }
];

function ProfileContent() {
  const { isAuthenticated, signInWithGoogle, logout, user } = useAuth();
  const customOrderQuery: TCustomQuery = useMemo(() => {
    return [{ fieldPath: 'buyerId', opStr: '==', value: user?.uid || '' }];
  }, [user]);

  const { data: orderList, loading } = useDbSnapshot<TOrder>('orders', undefined, customOrderQuery);
  const tableContent = orderList?.map(
    ({ createdAt, id, isDelivered, isPayed, orderedProducts }) => ({
      id,
      isDelivered,
      isPayed,
      textFields: [
        id,
        createdAt,
        `$ ${orderedProducts
          .reduce((acc, order) => acc + order.product.price * order.quantity, 0)
          .toLocaleString('es-AR')}`
      ]
    })
  );

  if (loading) return <Loading />;

  return (
    <Styled.ProfileContentContainer>
      {isAuthenticated ? (
        <>
          <div className="headingContainer">
            {/* @todo: Put decent fallback pic here */}
            <img className="userPic" src={user?.photoURL || ''} alt={user?.displayName || 'User'} />
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
        <GoogleButton handleClick={signInWithGoogle}>Log in</GoogleButton>
      )}
    </Styled.ProfileContentContainer>
  );
}

export default ProfileContent;
