import styled from 'styled-components';
import { PRUSSIAN_BLUE } from '~styles/colors';

export const AdminSidebarContainer = styled.div`
  align-items: center;
  background-color: ${PRUSSIAN_BLUE};
  border-radius: 10px;
  display: flex;
  height: calc(100vh - 2em);
  margin: 1em;
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
