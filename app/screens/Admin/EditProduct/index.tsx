import PrivateLayout from '~components/PrivateLayout';
import ProductForm from './components/ProductForm';
import ProductHeading from './components/ProductFormHeading';

function EditProduct() {
  return (
    <PrivateLayout>
      <ProductHeading />
      <ProductForm />
    </PrivateLayout>
  );
}

export default EditProduct;
