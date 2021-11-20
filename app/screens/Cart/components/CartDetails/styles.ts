import styled from 'styled-components';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 2em;
  width: 100vw;

  .cartProdsWrapper {
    width: 100%;
  }

  .heading,
  .subheadings {
    margin: ${SECONDARY_SPACING_EM} clamp(${SECONDARY_SPACING_EM}, 2.2vw, ${PRIMARY_SPACING_EM});
  }

  .subheadings {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${PRIMARY_SPACING_EM};
    padding: 8px;

    span {
      margin-right: ${SECONDARY_SPACING_EM};
    }

    button {
      max-width: unset;
    }
  }
`;
