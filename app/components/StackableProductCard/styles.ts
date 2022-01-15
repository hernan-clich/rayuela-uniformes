import styled from 'styled-components';
import { PORCELAIN, WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

type Props = {
  readonly $isFirstItem?: boolean;
};

export const StackableProductCardContainer = styled.div<Props>`
  border-bottom: 1px solid ${PORCELAIN};
  border-top: ${({ $isFirstItem }) => $isFirstItem && `1px solid ${PORCELAIN}`};
  display: flex;
  height: 240px;
  margin: 0 auto;
  width: calc(100% - clamp(${PRIMARY_SPACING_EM}, 5vw, 4em));

  .imgContainer {
    align-items: center;
    background-color: ${WILD_SAND};
    display: flex;
    justify-content: center;
    width: 240px;

    img {
      object-fit: contain;
      width: 50%;
    }
  }

  .cartProd {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding: 0 ${PRIMARY_SPACING_EM};
    width: 100%;
  }

  .cartProdTop {
    display: flex;
    justify-content: space-between;
    margin-top: ${PRIMARY_SPACING_EM};

    .topLeft {
      display: flex;
      flex-flow: column nowrap;

      span:nth-of-type(1) {
        padding-bottom: calc(${SECONDARY_SPACING_EM} - 8px);
      }

      .orderQuantity {
        margin-top: 8px;
      }
    }
  }

  .deleteButton {
    height: fit-content;
    padding: 12px;
  }

  .cartProdBottom {
    width: fit-content;
  }
`;
