import styled from 'styled-components';
import { ALABASTER, PRUSSIAN_BLUE, TRANSPARENT, WILD_SAND } from '~styles/colors';
import { PRIMARY_FONT, PRIMARY_SPACING_EM } from '~styles/variables';

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
  }

  .text {
    background-color: ${ALABASTER};
    font-family: ${PRIMARY_FONT};
    padding: ${PRIMARY_SPACING_EM};
  }
`;
