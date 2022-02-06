import styled from 'styled-components';
import { ALABASTER } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM, SMALL_BR } from '~styles/variables';

export const FooterContainer = styled.div`
  background-color: ${ALABASTER};
  display: flex;
  flex-direction: row;
  margin: 0 auto ${PRIMARY_SPACING_EM};
  min-height: 40vh;
  padding: ${PRIMARY_SPACING_EM};
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);

  @media (max-width: ${SMALL_BR}px) {
    flex-direction: column-reverse;
    padding: 0 0 0 0.5em;
  }
`;

export const FooterText = styled.div`
  flex-grow: 1;
  padding: 0 ${SECONDARY_SPACING_EM};

  div {
    padding-bottom: ${PRIMARY_SPACING_EM};
  }

  small {
    display: block;
    word-break: break-word;
  }

  @media (max-width: ${SMALL_BR}px) {
    align-items: center;
    display: flex;
    flex-direction: column;

    small {
      text-align: center;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-grow: 1;
  height: auto;
  justify-content: flex-end;

  .footerLink {
    height: min-content;
  }

  svg {
    margin: 0 0.75em;
  }

  @media (max-width: ${SMALL_BR}px) {
    flex-grow: 0;
    height: auto;
    justify-content: center;
    padding: ${PRIMARY_SPACING_EM} 0;
  }
`;
