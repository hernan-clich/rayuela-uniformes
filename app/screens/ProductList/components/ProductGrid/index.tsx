import Loading from '~components/Loading';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TProduct } from '~types/product';
import ProductCard from '../ProductCard';
import * as Styled from './styles';

function ProductGrid() {
  const productList = useDbSnapshot<TProduct>('products');

  if (!productList.length) return <Loading />;

  return (
    <Styled.ProductGridContainer>
      {productList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
