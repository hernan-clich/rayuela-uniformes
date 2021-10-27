import { MOCKED_PRODUCTS } from '~constants/products';
import * as Styled from './styles';

function ProductGrid() {
  return (
    <Styled.ProductGridContainer>
      {MOCKED_PRODUCTS.map((product) => (
        <div className="card" key={product.id}>
          <div className="img">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="text">
            <p>{product.name}</p>
            <p>$ {product.price}</p>
          </div>
        </div>
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
