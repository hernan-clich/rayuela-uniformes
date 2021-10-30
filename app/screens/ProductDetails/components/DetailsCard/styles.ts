import styled from 'styled-components';
import { ALABASTER, PRUSSIAN_BLUE, WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM } from '~styles/variables';

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

  .sizeSelect {
    background-color: ${ALABASTER};
    border: none;
    border-bottom: 1px solid ${PRUSSIAN_BLUE};
    color: ${PRUSSIAN_BLUE};
    font-size: 1.1rem;
    font-weight: 500;
    padding: 6px 0;
    width: 25%;
  }

  .quantity {
    margin: 1em 1em;
  }

  .counter {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .submit {
    max-width: unset;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .img,
    .detailsWrapper {
      min-width: 50%;
    }
  }
`;
