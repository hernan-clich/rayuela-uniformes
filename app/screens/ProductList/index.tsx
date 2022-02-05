import PublicLayout from '~components/PublicLayout';
import FilterContent from './components/FilterContent';
import ProductGrid from './components/ProductGrid';

function ProductList() {
  return (
    <PublicLayout>
      <FilterContent />
      <ProductGrid />
    </PublicLayout>
  );
}

export default ProductList;
