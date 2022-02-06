import PublicLayout from '~components/PublicLayout';
import { TProduct } from '~types/product';
import DetailsContent from './components/DetailsContent';

type Props = {
  product: TProduct;
};

function ProductDetails({ product }: Props) {
  return (
    <PublicLayout>
      <DetailsContent product={product} />
    </PublicLayout>
  );
}

export default ProductDetails;
