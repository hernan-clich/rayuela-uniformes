import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import CustomText from '~components/CustomText';
import * as Styled from './styles';

type Props = {
  quantity: number;
  disableCounter?: boolean;
  setQuantity?: Dispatch<SetStateAction<number>>;
  localStorageQtyHandlers?: {
    decrease: () => void;
    increase: () => void;
  };
};

function QuantityCounter({
  disableCounter,
  localStorageQtyHandlers,
  quantity,
  setQuantity
}: Props) {
  const COUNT_LIMITS = { MIN: 1, MAX: 19 };
  const isQuantityGtMin = quantity > COUNT_LIMITS.MIN;
  const isQuantityLtMax = quantity < COUNT_LIMITS.MAX;

  const handleQuantityClick = (action: 'incr' | 'decr') => {
    // The quantity should never be less than MIN nor greater than MAX
    if (action === 'decr' && isQuantityGtMin) {
      if (setQuantity) setQuantity((prevQuantity) => prevQuantity - 1);
      else if (localStorageQtyHandlers) localStorageQtyHandlers.decrease();
    }

    if (action === 'incr' && isQuantityLtMax) {
      if (setQuantity) setQuantity((prevQuantity) => prevQuantity + 1);
      else if (localStorageQtyHandlers) localStorageQtyHandlers.increase();
    }
  };

  return (
    <Styled.QuantityCounterContainer>
      <CustomText as="span" size="small" weight="regular" textAlign="left">
        CANTIDAD
      </CustomText>
      <div className="counterWrapper">
        <button
          className={clsx('counter', { disabled: disableCounter || !isQuantityGtMin })}
          disabled={disableCounter}
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
          className={clsx('counter', { disabled: disableCounter || !isQuantityLtMax })}
          disabled={disableCounter}
          onClick={() => handleQuantityClick('incr')}
        >
          +
        </button>
      </div>
    </Styled.QuantityCounterContainer>
  );
}

export default QuantityCounter;
