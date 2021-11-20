import styled from 'styled-components';
import { PRUSSIAN_BLUE, WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const CartCardContainer = styled.div`
  border: 1px solid ${PRUSSIAN_BLUE};
  display: flex;
  height: 240px;
  margin: 0 auto ${PRIMARY_SPACING_EM};
  width: calc(100% - clamp(2em, 5vw, 4em));

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
