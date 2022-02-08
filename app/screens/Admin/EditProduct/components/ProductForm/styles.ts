import styled from 'styled-components';
import { MONZA, PRUSSIAN_BLUE, SILVER, TRANSPARENT, WHITE } from '~styles/colors';
import {
  MEDIUM_BR,
  PRIMARY_FONT,
  PRIMARY_SPACING_PX,
  SECONDARY_SPACING_EM
} from '~styles/variables';
import { EFontSizes } from '~types/fonts';

export const ProductFormContainer = styled.div`
  .form {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${SECONDARY_SPACING_EM};
  }

  .leftContainer {
    display: flex;
    flex-flow: column nowrap;
    max-width: 700px;
    padding-right: ${SECONDARY_SPACING_EM};
    width: 75%;
  }

  .formInput {
    margin-bottom: ${SECONDARY_SPACING_EM};
  }

  .textInput {
    border: 1px solid ${SILVER};
    border-radius: 4px;
    color: ${PRUSSIAN_BLUE};
    font-family: ${PRIMARY_FONT};
    font-size: ${EFontSizes.small};
    margin-bottom: ${SECONDARY_SPACING_EM};
    padding: 10px ${SECONDARY_SPACING_EM} 8px;
  }

  .sizeContainer {
    align-items: center;
    display: flex;
    margin-bottom: 16px;
  }

  .sizeName {
    background-color: ${TRANSPARENT};
    border: 1px solid ${TRANSPARENT};
    cursor: default;
    font-weight: bold;
    padding: 0;
    pointer-events: none;
    position: relative;
    width: ${PRIMARY_SPACING_PX}px;
  }

  .sizePrice {
    flex-shrink: 1;
    margin: 0 8px 0 0;
    min-width: 64px;
  }

  .sizeStock {
    flex-shrink: 0;
    height: 24px;
    margin-left: 8px;
    width: 24px;
  }

  .rightContainer {
    margin-bottom: ${SECONDARY_SPACING_EM};
    width: 25%;
  }

  .fileInput {
    cursor: pointer;
    display: flex;
    height: 100%;
    margin-bottom: 0;
    padding: 0;
    position: relative;
    width: fit-content;

    &:hover {
      &::after {
        opacity: 0.7;
      }
    }

    &::after {
      align-items: center;
      background-color: ${PRUSSIAN_BLUE};
      color: ${WHITE};
      content: 'Añadir foto';
      display: flex;
      font-size: 20px;
      height: 100%;
      justify-content: center;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: opacity 200ms ease;
      width: 100%;
    }

    img {
      width: 200px;
    }
  }

  .errorMsg {
    color: ${MONZA};
    margin-bottom: 16px;
  }

  @media (max-width: ${MEDIUM_BR}px) {
    .form {
      flex-direction: column-reverse;
    }
  }
`;

export const ModalBodyContainer = styled.div`
  .modalHeading {
    display: block;
    margin: 48px;
  }

  .modalSubheading {
    display: block;
    margin-bottom: 16px;
  }

  .ctaContainer {
    display: flex;
    justify-content: space-evenly;
    padding: 32px 0;
  }
`;
