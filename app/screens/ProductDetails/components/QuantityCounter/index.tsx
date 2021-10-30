import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import CustomText from '~components/CustomText';
import * as Styled from './styles';

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

function QuantityCounter({ quantity, setQuantity }: Props) {
  const COUNT_LIMITS = { MIN: 1, MAX: 19 };
  const isQuantityGtMin = quantity > COUNT_LIMITS.MIN;
  const isQuantityLtMax = quantity < COUNT_LIMITS.MAX;

  const handleQuantityClick = (action: 'incr' | 'decr') => {
    // The quantity should never be less than MIN nor greater than MAX
    if (action === 'decr' && isQuantityGtMin) setQuantity((prevQuantity) => prevQuantity - 1);
    else if (action === 'incr' && isQuantityLtMax) setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <Styled.QuantityCounterContainer>
      <CustomText as="span" size="small" weight="regular" textAlign="left">
        CANTIDAD
      </CustomText>
      <div className="counterWrapper">
        <button
          className={clsx('counter', { disabled: !isQuantityGtMin })}
          onClick={() => handleQuantityClick('decr')}
        >
          –
        </button>
        <div className="quantityWrapper">
          <CustomText as="span" size="big" weight="regular" className="quantity">
            {quantity}
          </CustomText>
        </div>
        <button
          className={clsx('counter', { disabled: !isQuantityLtMax })}
          onClick={() => handleQuantityClick('incr')}
        >
          +
        </button>
      </div>
    </Styled.QuantityCounterContainer>
  );
}

export default QuantityCounter;
