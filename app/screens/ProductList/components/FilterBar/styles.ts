import styled from 'styled-components';
import { PRUSSIAN_BLUE } from '@styles/colors';
import { PRIMARY_SPACING_EM } from '@styles/variables';

const FilterBarContainer = styled.div`
  align-items: center;
  border: 3px solid ${PRUSSIAN_BLUE};
  display: flex;
  flex-flow: row nowrap;
  height: 7vh;
  margin: ${PRIMARY_SPACING_EM} auto calc(${PRIMARY_SPACING_EM} * 2);
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);

  .filter-items {
    align-items: center;
    display: flex;
    margin-left: ${PRIMARY_SPACING_EM};
  }
`;

export default FilterBarContainer;
