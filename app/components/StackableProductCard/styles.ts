import styled from 'styled-components';
import { PORCELAIN, TRANSPARENT, WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM, MOBILE_BR } from '~styles/variables';

type Props = {
  readonly $isFirstItem?: boolean;
};

export const StackableProductCardContainer = styled.div<Props>`
  border-bottom: 1px solid ${PORCELAIN};
  border-top: ${({ $isFirstItem }) => $isFirstItem && `1px solid ${PORCELAIN}`};
  display: flex;
  flex-flow: column nowrap;
  height: auto;
  margin: 0 auto;
  position: relative;
  width: 100%;

  .imgContainer {
    align-items: center;
    background-color: ${WILD_SAND};
    display: flex;
    justify-content: center;
    padding: ${SECONDARY_SPACING_EM};
    width: 100%;

    img {
      object-fit: contain;
      width: 50%;
    }
  }

  .cartProd {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: 0 ${SECONDARY_SPACING_EM};
    width: 100%;
  }

  .cartProdTop {
    display: grid;
    grid-template-areas:
      'name'
      'price'
      'size';
    margin-top: ${PRIMARY_SPACING_EM};

    .prodName,
    .prodSize,
    .prodPrice,
    .orderQuantity {
      padding-bottom: calc(${SECONDARY_SPACING_EM} - 8px);
    }

    .prodName {
      grid-area: name;
    }

    .prodSize {
      grid-area: size;
    }

    .prodPrice {
      grid-area: price;
      text-align: left;
      white-space: nowrap;
    }

    .orderQuantity {
      margin-top: 8px;
    }
  }

  .deleteButton {
    background: ${TRANSPARENT};
    height: fit-content;
    padding: 12px;
    position: absolute;
    right: 0;
  }

  .cartProdBottom {
    width: fit-content;
  }

  @media (min-width: ${MOBILE_BR}px) {
    flex-flow: row nowrap;

    .imgContainer {
      padding: 0;
      width: 240px;
    }

    .cartProd {
      padding: 0 4em;
    }

    .cartProdTop {
      grid-template-areas:
        'name price'
        'size size';

      .prodPrice {
        text-align: right;
      }
    }
  }
`;
