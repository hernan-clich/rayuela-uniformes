import PrivateLayout from '~components/PrivateLayout';
import AdminUsersContent from './components/AdminUsersContent';

function AdminUsers() {
  return (
    <PrivateLayout>
      <AdminUsersContent />
    </PrivateLayout>
  );
}

export default AdminUsers;
