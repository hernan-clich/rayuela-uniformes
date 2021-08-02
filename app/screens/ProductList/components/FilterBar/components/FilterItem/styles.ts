import styled from 'styled-components';
import { PRUSSIAN_BLUE, TRANSPARENT } from '@styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '@styles/variables';

const FilterItemContainer = styled.div`
  border: 1px solid ${TRANSPARENT};
  cursor: pointer;
  display: flex;
  height: 80%;
  margin-right: ${PRIMARY_SPACING_EM};
  padding: 12px calc(${SECONDARY_SPACING_EM}) 8px;

  &:hover {
    border: 1px solid ${PRUSSIAN_BLUE};
  }

  span {
    margin-right: 8px;
  }
`;

export default FilterItemContainer;
