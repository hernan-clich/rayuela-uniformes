import PublicLayout from '~components/PublicLayout';
import { MOCKED_PRODUCTS } from '~constants/products';
import FilterBar from './components/FilterBar';

function ProductList() {
  return (
    <PublicLayout>
      <FilterBar />
      <div>
        {MOCKED_PRODUCTS.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </PublicLayout>
  );
}

export default ProductList;
