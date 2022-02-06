import PublicLayout from '~components/PublicLayout';
import { TProduct } from '~types/product';
import FilterContent from './components/FilterContent';
import ProductGrid from './components/ProductGrid';

type Props = {
  products: TProduct[];
};

function ProductList({ products }: Props) {
  return (
    <PublicLayout>
      <FilterContent />
      <ProductGrid products={products} />
    </PublicLayout>
  );
}

export default ProductList;
