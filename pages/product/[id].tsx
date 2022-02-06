import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { db } from '~config/firebase/admin';
import ProductDetails from '~screens/ProductDetails';

export default ProductDetails;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const dbProduct = await db
    .collection('products')
    .doc((context?.params?.id as string) || '')
    .get();

  const product = { ...dbProduct?.data(), id: dbProduct?.id };

  return {
    props: {
      product
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productPaths = (await db.collection('products').get()).docs.map((doc) => ({
    params: {
      id: doc.id
    }
  }));

  return {
    paths: productPaths,
    fallback: false
  };
};
