import Link from 'next/link';
import PATHS from '~constants/paths';
import { MOCKED_PRODUCTS } from '~constants/products';
import * as Styled from './styles';

function ProductGrid() {
  return (
    <Styled.ProductGridContainer>
      {MOCKED_PRODUCTS.map((product) => (
        <Link
          href={{ pathname: PATHS.PRODUCT_DETAILS, query: { slug: product.id } }}
          key={product.id}
        >
          <a>
            <div className="card">
              <div className="img">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="text">
                <p>{product.name}</p>
                <p>$ {product.price}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
