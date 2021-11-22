import styled from 'styled-components';
import { PRUSSIAN_BLUE } from '~styles/colors';

export const AdminSidebarContainer = styled.div`
  align-items: center;
  background-color: ${PRUSSIAN_BLUE};
  display: flex;
  height: 100vh;
  width: 90px;

  .nav {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;

    svg {
      margin: 1em auto;
    }
  }
`;
