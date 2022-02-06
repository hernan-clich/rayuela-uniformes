import Link from 'next/link';
import PATHS from '~constants/paths';
import type { TProduct } from '~types/product';
import * as Styled from './styles';

type Props = {
  product: TProduct;
};

function ProductCard({ product }: Props) {
  const { id, imageUrl, name, price } = product;

  return (
    <Link href={{ pathname: PATHS.PRODUCT_DETAILS, query: { id: id } }}>
      <Styled.ProductCardLink>
        <Styled.ProductCardContainer>
          <div className="img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="text">
            <p>{name}</p>
            <p>$ {price}</p>
          </div>
        </Styled.ProductCardContainer>
      </Styled.ProductCardLink>
    </Link>
  );
}

export default ProductCard;
