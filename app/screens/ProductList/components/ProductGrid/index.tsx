import useDbSnapshot from '~hooks/useDbSnapshot';
import { TProduct } from '~types/product';
import ProductCard from '../ProductCard';
import * as Styled from './styles';

function ProductGrid() {
  const productList = useDbSnapshot<TProduct>('products');
  return (
    <Styled.ProductGridContainer>
      {productList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
