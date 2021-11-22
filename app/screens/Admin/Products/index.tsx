import PrivateLayout from '~components/PrivateLayout';
import AdminProductsContent from './components/AdminProductsContent';

function AdminProducts() {
  return (
    <PrivateLayout>
      <AdminProductsContent />
    </PrivateLayout>
  );
}

export default AdminProducts;
