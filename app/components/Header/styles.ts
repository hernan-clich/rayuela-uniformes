import styled from 'styled-components';
import { WHITE } from '@styles/colors';
import { SECONDARY_SPACING_EM, PRIMARY_FONT } from 'app/styles/variables';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${WHITE};
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  height: 10vh;
  padding: ${SECONDARY_SPACING_EM} clamp(2em, 5vw, 4em);
  position: fixed;
  width: calc(100vw - 15px);

  .header-left {
    align-items: center;
    display: flex;
    flex-direction: row nowrap;
  }

  .nav-container {
    font-family: ${PRIMARY_FONT};
    font-weight: 900;
    margin-left: 4em;
    text-transform: uppercase;
  }

  .nav-link {
    margin: 0 1em;
    padding: 0.25em;

    &:hover {
      cursor: pointer;
    }
  }

  .cart-icon {
    &:hover {
      cursor: pointer;
    }
  }
`;
