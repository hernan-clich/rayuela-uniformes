import styled from 'styled-components';
import { PRUSSIAN_BLUE } from '@styles/colors';
import { PRIMARY_SPACING_EM } from '@styles/variables';

export const FilterBarContainer = styled.div`
  align-items: center;
  border: 3px solid ${PRUSSIAN_BLUE};
  display: flex;
  flex-flow: row nowrap;
  margin: ${PRIMARY_SPACING_EM} auto calc(${PRIMARY_SPACING_EM} * 2);
  min-height: 7vh;
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);
  z-index: 3;
`;

export const FilterCategories = styled.div`
  align-items: center;
  display: flex;
  margin-left: ${PRIMARY_SPACING_EM};
`;
