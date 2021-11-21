import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import useCart from '~hooks/useCart';
import { TItem } from '~types/item';
import * as Styled from './styles';

type Props = {
  $isFirstItem: boolean;
  item: TItem;
};

function CartCard({ $isFirstItem, item }: Props) {
  const { deleteItem, setCurrentProductQuantity } = useCart(item?.product?.id);

  return (
    <Styled.CartCardContainer $isFirstItem={$isFirstItem}>
      <div className="imgContainer">
        <img src={item?.product?.imageUrl} alt={item?.product?.name || 'Producto'} />
      </div>
      <div className="cartProd">
        <div className="cartProdTop">
          <div className="topLeft">
            <CustomText
              as="span"
              size="regular"
              weight="bold"
              textAlign="left"
              textTransform="uppercase"
            >
              {item?.product?.name}
            </CustomText>
            <CustomText
              as="span"
              size="small"
              weight="regular"
              textAlign="left"
              textTransform="uppercase"
            >
              {`Talle: ${item?.size}`}
            </CustomText>
          </div>
          <div className="topRight">
            <CustomText as="span" size="regular" weight="bold" textTransform="uppercase">
              {`$ ${(item?.product?.price * item?.quantity).toLocaleString('de-DE')}`}
            </CustomText>
          </div>
        </div>
        <div className="cartProdBottom">
          <QuantityCounter
            quantity={item?.quantity}
            localStorageQtyHandlers={{
              decrease: () => setCurrentProductQuantity('decr', item?.size),
              increase: () => setCurrentProductQuantity('incr', item?.size)
            }}
          />
        </div>
      </div>
      <CustomButton
        size="regular"
        weight="black"
        className="deleteButton"
        secondary
        onClick={() => deleteItem(item?.id)}
      >
        ✕
      </CustomButton>
    </Styled.CartCardContainer>
  );
}

export default CartCard;
