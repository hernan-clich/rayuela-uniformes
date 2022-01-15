import { useRouter } from 'next/router';
import CustomText from '~components/CustomText';
import useDbSnapshot from '~hooks/useDbSnapshot';
import StackableProductCard from '~components/StackableProductCard';
import { TOrder } from '~types/order';
import * as Styled from './styles';

// @todo: Display isPayed and isDelivered values somewhere here
function OrderContent() {
  const router = useRouter();
  const orderId = router?.query?.id as string;

  const [orderData] = useDbSnapshot<TOrder>('orders', orderId);

  const itemsCount = orderData?.orderedProducts?.reduce((acc, order) => acc + order.quantity, 0);
  const totalCartAmt = orderData?.orderedProducts?.reduce(
    (acc, order) => acc + order.product.price * order.quantity,
    0
  );
  const parsedTotalCartAmt = `$ ${totalCartAmt?.toLocaleString('de-DE')}`;

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
            >
              {parsedTotalCartAmt}
            </CustomText>
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
