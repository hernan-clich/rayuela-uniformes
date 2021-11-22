import styled from 'styled-components';
import { PORCELAIN, WHITE } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from 'app/styles/variables';

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${WHITE};
  box-shadow: 0px 0px 5px 0px ${PORCELAIN};
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  height: 10vh;
  padding: ${SECONDARY_SPACING_EM} clamp(${PRIMARY_SPACING_EM}, 5vw, 4em);
  position: fixed;
  width: 100vw;
  z-index: 3;

  span {
    margin: 0 ${SECONDARY_SPACING_EM};
    padding: 0.25em;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
`;

export const HeaderRight = styled.div`
  a {
    padding-left: 16px;
  }
`;
