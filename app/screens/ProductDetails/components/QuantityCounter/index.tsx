import { Dispatch, SetStateAction } from 'react';
import CustomText from '~components/CustomText';
import * as Styled from './styles';

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

function QuantityCounter({ quantity, setQuantity }: Props) {
  const handleQuantityClick = (action: 'incr' | 'decr') => {
    // The quantity should never be less than 1 nor greater than 99
    if (action === 'decr' && quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
    else if (action === 'incr' && quantity <= 99) setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <Styled.QuantityCounterContainer>
      <CustomText as="span" size="small" weight="regular" textAlign="left">
        CANTIDAD
      </CustomText>
      <div className="counterWrapper">
        <button className="counter disabled" onClick={() => handleQuantityClick('decr')}>
          –
        </button>
        <div className="quantityWrapper">
          <CustomText as="span" size="big" weight="regular" className="quantity">
            {quantity}
          </CustomText>
        </div>
        <button className="counter" onClick={() => handleQuantityClick('incr')}>
          +
        </button>
      </div>
    </Styled.QuantityCounterContainer>
  );
}

export default QuantityCounter;
