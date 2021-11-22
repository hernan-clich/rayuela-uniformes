import styled from 'styled-components';
import { BAHAMA_BLUE, PRUSSIAN_BLUE } from '~styles/colors';
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

    .icon {
      border-radius: 10px;
      margin: 0.5em 0;
      padding: 8px;
      transition: transform 200ms ease-out;
    }

    .hovered {
      &:hover {
        transform: scale(1.15);
      }
    }

    .current {
      background-color: ${BAHAMA_BLUE};
    }
  }
`;
