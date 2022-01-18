import { WhereFilterOp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Loading from '~components/Loading';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TProduct } from '~types/product';
import ProductCard from '../ProductCard';
import * as Styled from './styles';

function ProductGrid() {
  const router = useRouter();
  const school = router?.query?.school as string;
  const schoolQuery = [{ fieldPath: 'school', opStr: '==' as WhereFilterOp, value: school }];
  const { data: productList, loading } = useDbSnapshot<TProduct>('products', undefined, [
    ...(school ? schoolQuery : [])
  ]);

  if (loading) return <Loading />;

  return (
    <Styled.ProductGridContainer>
      {productList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Styled.ProductGridContainer>
  );
}

export default ProductGrid;
