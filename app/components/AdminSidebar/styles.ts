import styled from 'styled-components';
import { PRUSSIAN_BLUE } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const AdminSidebarContainer = styled.div`
  align-items: center;
  background-color: ${PRUSSIAN_BLUE};
  border-radius: 10px;
  display: flex;
  height: calc(100vh - ${PRIMARY_SPACING_EM});
  margin: ${SECONDARY_SPACING_EM};
  width: 90px;

  .nav {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;

    svg {
      margin: ${SECONDARY_SPACING_EM} auto;
    }
  }
`;
