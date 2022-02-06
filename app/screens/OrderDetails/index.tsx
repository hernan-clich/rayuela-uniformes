import PublicLayout from '~components/PublicLayout';
import { TOrder } from '~types/order';
import OrderContent from './components/OrderContent';

type Props = {
  order: TOrder;
};

function OrderDetails({ order }: Props) {
  return (
    <PublicLayout>
      <OrderContent order={order} />
    </PublicLayout>
  );
}

export default OrderDetails;
