import { WhereFilterOp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Loading from '~components/Loading';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TProduct } from '~types/product';
import ProductCard from '../ProductCard';
import * as Styled from './styles';

function ProductGrid() {
  const router = useRouter();
  const school = router?.query?.school as string | undefined;
  const category = router?.query?.categories as string | undefined;
  const schoolQuery = useMemo(() => {
    if (!school) return;
    return [{ fieldPath: 'school', opStr: '==' as WhereFilterOp, value: school }];
  }, [school]);
  const categoryQuery = useMemo(() => {
    if (!category) return;
    return [{ fieldPath: 'category', opStr: '==' as WhereFilterOp, value: category }];
  }, [category]);

  const { data: productList, loading } = useDbSnapshot<TProduct>('products', undefined, [
    ...(schoolQuery || []),
    ...(categoryQuery || [])
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
