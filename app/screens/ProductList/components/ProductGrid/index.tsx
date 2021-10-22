import { MOCKED_PRODUCTS } from '~constants/products';
import * as Styled from './styles';

function ProductGrid() {
  return (
    <Styled.ProductGridContainer>
      {MOCKED_PRODUCTS.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
