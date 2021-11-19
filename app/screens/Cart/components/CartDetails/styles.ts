import styled from 'styled-components';
import { PRUSSIAN_BLUE, WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100vw;

  .cartProdsWrapper {
    flex-grow: 5;

    .cartProdsContainer {
      border: 1px solid ${PRUSSIAN_BLUE};
      display: flex;
      height: 240px;
      margin: 0 auto;
      width: calc(100% - clamp(2em, 5vw, 4em));
    }

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
          padding-bottom: ${SECONDARY_SPACING_EM};
        }
      }
    }

    .cartProdBottom {
      width: fit-content;
    }
  }

  .detailsContainer {
    flex-grow: 5;
    min-width: 230px;
  }
`;
