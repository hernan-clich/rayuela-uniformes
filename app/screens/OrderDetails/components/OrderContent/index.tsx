import clsx from 'clsx';
import { useRouter } from 'next/router';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import Loading from '~components/Loading';
import StackableProductCard from '~components/StackableProductCard';
import { isServer } from '~constants/general';
import { TOrder } from '~types/order';
import { payCurrentOrder } from './helpers';
import * as Styled from './styles';

type Props = {
  order: TOrder;
};

function OrderContent({ order }: Props) {
  const router = useRouter();
  const itemsCount = order?.orderedProducts?.reduce((acc, order) => acc + order.quantity, 0);
  const totalCartAmt = order?.orderedProducts?.reduce(
    (acc, order) => acc + order.product.price * order.quantity,
    0
  );
  const parsedTotalCartAmt = `$ ${totalCartAmt?.toLocaleString('es-AR')}`;

  if (isServer) return null;

  if (!order || router.isFallback) return <Loading />;

  return (
    <Styled.OrderDetailsContainer>
      <div className="cartProdsWrapper">
        <CustomText
          size="big"
          weight="black"
          textTransform="uppercase"
          textAlign="left"
          className="heading"
        >
          {`Orden Nº: ${order.id}`}
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
        <div className="statusContainer">
          <div className="status">
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
            >
              Pago
            </CustomText>
            <CustomText
              as="span"
              size="xsmall"
              weight="bold"
              textTransform="capitalize"
              textAlign="left"
              secondary
              className={clsx('chip', { red: !order?.isPayed, green: order?.isPayed })}
            >
              {order?.isPayed ? 'Pagado' : 'Pendiente'}
            </CustomText>
            {!order?.isPayed && (
              <CustomButton
                size="small"
                weight="bold"
                className="paymentBtn"
                onClick={async () => {
                  const { redirectUrl } = await payCurrentOrder({ order: order });

                  window.open(redirectUrl);
                }}
              >
                Pagar
              </CustomButton>
            )}
          </div>
          <div className="status">
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textTransform="uppercase"
              textAlign="left"
            >
              Entrega
            </CustomText>
            <CustomText
              as="span"
              size="xsmall"
              weight="bold"
              textTransform="capitalize"
              textAlign="left"
              secondary
              className={clsx('chip', {
                red: !order?.isDelivered,
                green: order?.isDelivered
              })}
            >
              {order?.isDelivered ? 'Entregado' : 'Pendiente'}
            </CustomText>
          </div>
        </div>
        <div>
          {order?.orderedProducts?.map(({ product: { id }, product, quantity, size }, i) => (
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
