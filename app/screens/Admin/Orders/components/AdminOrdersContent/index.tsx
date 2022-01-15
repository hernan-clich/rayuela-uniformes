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
  }
];

function AdminOrdersContent() {
  const data = useDbSnapshot<TOrder>('orders');
  const tableContent = data?.map(({ buyerName, createdAt, id }) => ({
    id,
    textFields: [id, buyerName, createdAt]
  }));

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
