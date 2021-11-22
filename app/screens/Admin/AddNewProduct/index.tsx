import PrivateLayout from '~components/PrivateLayout';
import AddNewProductForm from './components/AddNewProductForm';
import AddNewProductHeading from './components/AddNewProductHeading';

function AddNewProduct() {
  return (
    <PrivateLayout>
      <AddNewProductHeading />
      <AddNewProductForm />
    </PrivateLayout>
  );
}

export default AddNewProduct;
