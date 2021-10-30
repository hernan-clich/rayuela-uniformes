import styled from 'styled-components';
import { ALABASTER, PRUSSIAN_BLUE } from '~styles/colors';
import { EFontSizes, EFontWeights } from '~types/fonts';

export const SizePickerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 45px;
  min-width: 100px;
  width: 10%;

  .sizeSelect {
    background-color: ${ALABASTER};
    border: none;
    border-bottom: 1px solid ${PRUSSIAN_BLUE};
    color: ${PRUSSIAN_BLUE};
    cursor: pointer;
    font-size: ${EFontSizes.regular};
    font-weight: ${EFontWeights.regular};
    padding: 6px 0;
    width: 100%;
  }
`;
