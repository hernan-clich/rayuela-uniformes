import styled from 'styled-components';
import { SECONDARY_SPACING_EM } from '~styles/variables';

export const AuthContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 6em;
  width: 100%;

  .title {
    margin: ${SECONDARY_SPACING_EM};
  }

  button {
    max-width: unset;
    margin-bottom: ${SECONDARY_SPACING_EM};
  }

  .btnContents {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;

    svg {
      margin-right: ${SECONDARY_SPACING_EM};
    }
  }
`;
