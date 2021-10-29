import { MOCKED_PRODUCTS } from '~constants/products';
import ProductCard from '../ProductCard';
import * as Styled from './styles';

function ProductGrid() {
  return (
    <Styled.ProductGridContainer>
      {MOCKED_PRODUCTS.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
