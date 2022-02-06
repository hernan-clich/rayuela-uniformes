import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { db } from '~config/firebase/admin';
import ProductList from '~screens/ProductList';

export default ProductList;

type DbQuery = FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

export const getServerSideProps: GetServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  let dbQuery: DbQuery = db.collection('products');

  dbQuery = query?.school ? (dbQuery.where('school', '==', query?.school) as DbQuery) : dbQuery;
  dbQuery = query?.categories
    ? (dbQuery.where('category', '==', query?.categories) as DbQuery)
    : dbQuery;

  const dbProducts = (await dbQuery.get()).docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));

  return {
    props: {
      products: dbProducts
    }
  };
};
