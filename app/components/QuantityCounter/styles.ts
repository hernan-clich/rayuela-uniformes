import styled from 'styled-components';
import { EFontSizes, EFontWeights } from '~types/fonts';
import { PRIMARY_SPACING_EM } from '~styles/variables';

export const QuantityCounterContainer = styled.div`
  margin-bottom: ${PRIMARY_SPACING_EM};
  user-select: none;

  .counterWrapper {
    align-items: baseline;
    display: flex;
    justify-content: center;
    transform: translateX(-16px);
  }

  .quantityWrapper {
    align-items: center;
    display: flex;
    height: 38px;
    justify-content: center;
    min-width: 45px;

    .quantity {
      font-size: ${EFontSizes.regular};
      font-weight: ${EFontWeights.regular};
      width: 20px;
    }
  }

  .counter {
    cursor: pointer;
    font-size: ${EFontSizes.regular};
    font-weight: ${EFontWeights.black};
    padding: 8px 16px;
    transform-origin: 50% 52.5%;
    transition: transform 0.15s ease-out;

    &:active {
      opacity: 0.5;
      transform: scale(3);
    }
  }

  .counter.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
