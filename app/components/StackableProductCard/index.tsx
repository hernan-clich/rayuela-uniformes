import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import QuantityCounter from '~components/QuantityCounter';
import useCart from '~hooks/useCart';
import { TItem } from '~types/item';
import * as Styled from './styles';

type Props = {
  $isFirstItem: boolean;
  item: TItem;
  isOrder?: boolean;
};

function StackableProductCard({ $isFirstItem, item, isOrder = false }: Props) {
  const { deleteItem, setCurrentProductQuantity } = useCart(item?.product?.id);

  return (
    <Styled.StackableProductCardContainer $isFirstItem={$isFirstItem}>
      <div className="imgContainer">
        <img src={item?.product?.imageUrl} alt={item?.product?.name || 'Producto'} />
      </div>
      <div className="cartProd">
        <div className="cartProdTop">
          <CustomText
            as="span"
            size="regular"
            weight="bold"
            textAlign="left"
            textTransform="uppercase"
            className="prodName"
          >
            {item?.product?.name}
          </CustomText>
          <CustomText
            as="span"
            size="regular"
            weight="bold"
            textTransform="uppercase"
            className="prodPrice"
          >
            {`$ ${(item?.price * item?.quantity).toLocaleString('es-AR')}`}
          </CustomText>
          <CustomText
            as="span"
            size="small"
            weight="regular"
            textAlign="left"
            textTransform="uppercase"
            className="prodSize"
          >
            {`Talle: ${item?.size}`}
          </CustomText>
          {isOrder && (
            <CustomText
              as="span"
              size="small"
              weight="regular"
              textAlign="left"
              textTransform="uppercase"
              className="orderQuantity"
            >
              {`Cantidad: ${item?.quantity}`}
            </CustomText>
          )}
        </div>
        <div className="cartProdBottom">
          {!isOrder && (
            <QuantityCounter
              quantity={item?.quantity}
              localStorageQtyHandlers={{
                decrease: () => setCurrentProductQuantity('decr', item?.size),
                increase: () => setCurrentProductQuantity('incr', item?.size)
              }}
            />
          )}
        </div>
      </div>
      {!isOrder && (
        <CustomButton
          size="regular"
          weight="black"
          className="deleteButton"
          secondary
          onClick={() => deleteItem(item?.id)}
        >
          ✕
        </CustomButton>
      )}
    </Styled.StackableProductCardContainer>
  );
}

export default StackableProductCard;
