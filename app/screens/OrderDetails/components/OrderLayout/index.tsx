import { useRouter } from 'next/router';
import CustomText from '~components/CustomText';
import useDbSnapshot from '~hooks/useDbSnapshot';
import { TOrder } from '~types/order';
import * as Styled from './styles';

function OrderLayout() {
  const router = useRouter();
  const orderId = router?.query?.id as string;

  const [orderData] = useDbSnapshot<TOrder>('orders', orderId);

  const itemsCount = orderData?.orderedProducts?.length;
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
        {/* {storedItems &&
          storedItems.map((item, i) => (
            <CartCard key={item.id} item={item} $isFirstItem={i === 0} />
          ))} */}
      </div>
    </Styled.OrderDetailsContainer>
  );
}

export default OrderLayout;
