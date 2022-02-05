import styled from 'styled-components';
import { PRUSSIAN_BLUE, TRANSPARENT } from '~styles/colors';
import { PRIMARY_SPACING_EM } from '~styles/variables';

export const FilterBarContainer = styled.div`
  align-items: center;
  border: 3px solid ${PRUSSIAN_BLUE};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: ${PRIMARY_SPACING_EM} auto calc(${PRIMARY_SPACING_EM} * 2);
  min-height: 7vh;
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);
  z-index: 3;

  .clearFiltersCta {
    border: 1px solid ${TRANSPARENT};
    margin-right: ${PRIMARY_SPACING_EM};
    padding: 8px;
    vertical-align: center;

    &:hover {
      border: 1px solid ${PRUSSIAN_BLUE};
    }
  }
`;

export const FilterCategories = styled.div`
  align-items: center;
  display: flex;
  margin-left: ${PRIMARY_SPACING_EM};
`;
