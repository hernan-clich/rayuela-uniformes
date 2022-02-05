import styled from 'styled-components';
import { PRUSSIAN_BLUE, TRANSPARENT, WHITE } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const FilterBarMobileContainer = styled.div`
  align-items: center;
  border: 1px solid ${PRUSSIAN_BLUE};
  display: flex;
  justify-content: space-between;
  margin: ${PRIMARY_SPACING_EM} auto;
  padding: 8px ${SECONDARY_SPACING_EM};
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);

  .openFilterBtn {
    border: 1px solid ${TRANSPARENT};
    padding: 4px;

    &:hover {
      border: 1px solid ${PRUSSIAN_BLUE};
    }
  }
`;

export const FilterMobileContainer = styled.div`
  background-color: ${WHITE};
  height: 90vh;
  left: 0;
  margin-top: 10vh;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 4;

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: ${PRIMARY_SPACING_EM} 0 ${PRIMARY_SPACING_EM} ${SECONDARY_SPACING_EM};

    div {
      display: flex;
    }

    .cleanFiltersCta {
      padding: 8px 0;
      width: max-content;
    }

    .closeFilterBtn {
      padding: 0 ${SECONDARY_SPACING_EM};
    }
  }
`;
