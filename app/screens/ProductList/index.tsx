import PublicLayout from '~components/PublicLayout';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';

function ProductList() {
  return (
    <PublicLayout>
      <FilterBar />
      <ProductGrid />
    </PublicLayout>
  );
}

export default ProductList;
