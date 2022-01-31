import styled from 'styled-components';
import { ALABASTER, WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM, SMALL_BR } from '~styles/variables';

export const DetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: ${PRIMARY_SPACING_EM} auto;
  min-height: 70vh;
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);

  .img,
  .details {
    min-height: 50vh;
    min-width: calc(280px - ${PRIMARY_SPACING_EM} * 2);
  }

  .img {
    align-items: center;
    background-color: ${WILD_SAND};
    display: flex;
    justify-content: center;

    img {
      object-fit: contain;
      width: 50%;
    }
  }

  .detailsWrapper {
    background-color: ${ALABASTER};
  }

  .details {
    align-items: flex-start;
    display: flex;
    flex-flow: column nowrap;
    margin: ${PRIMARY_SPACING_EM};
  }

  .name {
    margin: 45px 0;
  }

  .price {
    margin-bottom: 45px;
    opacity: 0.6;
  }

  @media (max-width: ${SMALL_BR}px) {
    flex-direction: row;

    .img,
    .detailsWrapper {
      min-width: 50%;
    }
  }
`;
