import styled from 'styled-components';
import { ALABASTER, PRUSSIAN_BLUE, TRANSPARENT, WILD_SAND } from '~styles/colors';
import {
  MOBILE_BR,
  PRIMARY_FONT,
  PRIMARY_SPACING_EM,
  SECONDARY_SPACING_EM
} from '~styles/variables';

export const ProductCardLink = styled.a`
  overflow: hidden;
  width: inherit;

  @media (min-width: ${MOBILE_BR}px) {
    width: auto;
  }
`;

export const ProductCardContainer = styled.div`
  border: 1px solid ${TRANSPARENT};
  user-select: none;

  &:hover {
    border: 1px solid ${PRUSSIAN_BLUE};
    cursor: pointer;
  }

  .img {
    align-items: center;
    background-color: ${WILD_SAND};
    display: flex;
    height: 320px;
    justify-content: center;

    img {
      max-width: 80%;
      padding: 0 ${SECONDARY_SPACING_EM};
    }
  }

  .text {
    background-color: ${ALABASTER};
    font-family: ${PRIMARY_FONT};
    padding: ${PRIMARY_SPACING_EM};
  }
`;
