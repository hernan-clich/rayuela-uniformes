import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TOrder } from '~types/order';
import * as Styled from './styles';

const COLUMN_HEADERS = [
  {
    displayName: 'ID',
    propertyName: 'id'
  },
  {
    displayName: 'Cliente',
    propertyName: 'buyerName'
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

function AdminOrdersContent() {
  const data = useDbSnapshot<TOrder>('orders');
  const tableContent = data?.map(
    ({ buyerName, createdAt, id, isDelivered, isPayed, orderedProducts }) => ({
      id,
      isDelivered,
      isPayed,
      textFields: [
        id,
        buyerName,
        createdAt,
        `$ ${orderedProducts
          .reduce((acc, order) => acc + order.product.price * order.quantity, 0)
          .toLocaleString('es-AR')}`
      ]
    })
  );

  return (
    <Styled.AdminOrdersContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Ordenes
        </CustomText>
      </div>
      <CustomTable columnHeaders={COLUMN_HEADERS} tableContent={tableContent} />
    </Styled.AdminOrdersContentContainer>
  );
}

export default AdminOrdersContent;
