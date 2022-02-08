import Image from 'next/image';
import Link from 'next/link';
import PATHS from '~constants/paths';
import type { TProduct } from '~types/product';
import * as Styled from './styles';

type Props = {
  product: TProduct;
};

function ProductCard({ product }: Props) {
  const { id, imageUrl, name, sizes } = product;

  return (
    <Link href={{ pathname: PATHS.PRODUCT_DETAILS, query: { id: id } }}>
      <Styled.ProductCardLink>
        <Styled.ProductCardContainer>
          <div className="img">
            <Image src={imageUrl} alt={name} height={180} width={180} layout="fixed" />
          </div>
          <div className="text">
            <p>{name}</p>
            <p>$ {sizes?.[0]?.price}</p>
          </div>
        </Styled.ProductCardContainer>
      </Styled.ProductCardLink>
    </Link>
  );
}

export default ProductCard;
