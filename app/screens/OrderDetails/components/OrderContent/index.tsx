import clsx from 'clsx';
import { useRouter } from 'next/router';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import Loading from '~components/Loading';
import StackableProductCard from '~components/StackableProductCard';
import { isServer } from '~constants/general';
import PATHS from '~constants/paths';
import { useAuth } from '~hooks/useAuth';
import useDbCrud from '~hooks/useDbCrud';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TOrder } from '~types/order';
import { EDbCollections } from '~types/db';
import * as Styled from './styles';

function OrderContent() {
  const router = useRouter();
  const orderId = router?.query?.id as string;
  const { isAdmin } = useAuth();

  const {
    data: [orderData],
    error
  } = useDbSnapshot<TOrder>({ collectionName: 'orders', docId: orderId });
  const { updateDbDocument } = useDbCrud(EDbCollections.orders);

  const itemsCount = orderData?.orderedProducts?.reduce((acc, order) => acc + order.quantity, 0);
  const totalCartAmt = orderData?.orderedProducts?.reduce(
    (acc, order) => acc + order.product.price * order.quantity,
    0
  );
  const parsedTotalCartAmt = `$ ${totalCartAmt?.toLocaleString('es-AR')}`;

  if (error) router.replace(PATHS.HOME);

  if (isServer) return null;

  if (!orderData) return <Loading />;

  return (
    <Styled.OrderDetailsContainer>
      {window && window?.history?.length > 2 && (
        <CustomButton
          className="backBtn"
          size="small"
          weight="regular"
          onClick={() => router.back()}
        >
          <span className="icon" role="img" aria-label="finger pointing left">
            ←
          </span>
          Volver
        </CustomButton>
      )}
      <div className="cartProdsWrapper">
        <CustomText
          size="big"
          weight="black"
          textTransform="uppercase"
          textAlign="left"
          className="heading"
        >
          {`Orden Nº: ${orderId}`}
        </CustomText>
        <div className="subheadings">
          <div>
            <CustomText
              as="span"
              size="regular"
              weight="regular"
              textTransform="uppercase"
              textAlign="left"
            >
              TOTAL ({`${itemsCount} ${itemsCount === 1 ? 'producto' : 'productos'}`})
            </CustomText>
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
              className="prodPrice"
            >
              {parsedTotalCartAmt}
            </CustomText>
          </div>
        </div>
        <div className="chipsContainer">
          <div className="chip">
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
            >
              Pago
            </CustomText>
            <CustomButton
              size="small"
              weight="bold"
              className={clsx({ red: !orderData?.isPayed, green: orderData?.isPayed })}
              onClick={() => {
                if (!isAdmin) return;
                updateDbDocument<TOrder>(orderData?.id, { isPayed: !orderData?.isPayed });
              }}
            >
              {orderData?.isPayed ? 'Pagado' : 'Pendiente'}
            </CustomButton>
          </div>
          <div className="chip">
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
            >
              Entrega
            </CustomText>
            <CustomButton
              size="small"
              weight="bold"
              className={clsx({ red: !orderData?.isDelivered, green: orderData?.isDelivered })}
              onClick={() => {
                if (!isAdmin) return;
                updateDbDocument<TOrder>(orderData?.id, { isDelivered: !orderData?.isDelivered });
              }}
            >
              {orderData?.isDelivered ? 'Entregado' : 'Pendiente'}
            </CustomButton>
          </div>
        </div>
        <div>
          {orderData?.orderedProducts?.map(({ product: { id }, product, quantity, size }, i) => (
            <StackableProductCard
              key={id}
              $isFirstItem={i === 0}
              item={{ id, product, quantity, size }}
              isOrder
            />
          ))}
        </div>
      </div>
    </Styled.OrderDetailsContainer>
  );
}

export default OrderContent;
