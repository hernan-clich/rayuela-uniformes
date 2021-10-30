import styled from 'styled-components';
import { EFontSizes, EFontWeights } from '~types/fonts';

export const QuantityCounterContainer = styled.div`
  margin-bottom: 20px;

  .counterWrapper {
    display: flex;
  }

  .quantityWrapper {
    display: flex;
    justify-content: center;
    min-width: 70px;

    .quantity {
      font-size: ${EFontSizes.regular};
      font-weight: ${EFontWeights.regular};
      margin: 1em 1em;
      width: 20px;
    }
  }

  .counter {
    cursor: pointer;
    font-size: ${EFontSizes.regular};
    font-weight: ${EFontWeights.regular};
  }
`;
