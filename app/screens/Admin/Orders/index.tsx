import PrivateLayout from '~components/PrivateLayout';
import AdminOrdersContent from './components/AdminOrdersContent';

function AdminOrders() {
  return (
    <PrivateLayout>
      <AdminOrdersContent />
    </PrivateLayout>
  );
}

export default AdminOrders;
