import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { db } from '~config/firebase/admin';
import OrderDetails from '~screens/OrderDetails';

export default OrderDetails;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const dbOrder = await db
    .collection('orders')
    .doc((context?.params?.id as string) || '')
    .get();

  // Resorting to this to avoid the following error
  // Error: Error serializing `.order.timestamp` returned from `getStaticProps` in "/order/[id]".
  // Reason: `object` ("[object Object]") cannot be serialized as JSON. Please only return JSON serializable data types.
  const order = JSON.parse(JSON.stringify({ ...dbOrder?.data(), id: dbOrder?.id }));

  return {
    props: {
      order
    },
    // Every 10 minutes
    revalidate: 60 * 10
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const orderPaths = (await db.collection('orders').get()).docs.map((doc) => ({
    params: {
      id: doc.id
    }
  }));

  return {
    paths: orderPaths,
    fallback: true
  };
};
