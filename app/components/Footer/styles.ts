import styled from 'styled-components';
import { ALABASTER } from '@styles/colors';
import { PRIMARY_SPACING_EM } from '@styles/variables';

export const FooterContainer = styled.div`
  background-color: ${ALABASTER};
  display: flex;
  flex-direction: row;
  margin: 0 auto ${PRIMARY_SPACING_EM};
  min-height: 40vh;
  padding: ${PRIMARY_SPACING_EM};
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 0 0 0.5em;
  }
`;

export const FooterText = styled.div`
  flex-grow: 1;
  padding: 0 1em;

  div {
    padding-bottom: ${PRIMARY_SPACING_EM};
  }

  small {
    display: block;
    word-break: break-word;
  }

  @media (max-width: 768px) {
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

  svg {
    margin: 0 0.75em;
  }

  @media (max-width: 768px) {
    flex-grow: 0;
    height: auto;
    justify-content: center;
    padding: 2em 0;
  }
`;
