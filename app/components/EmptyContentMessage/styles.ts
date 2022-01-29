import styled from 'styled-components';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const CartEmptyContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 4em 0;

  .cta {
    display: flex;
    flex-flow: column nowrap;
    margin: ${PRIMARY_SPACING_EM} auto;

    h2 {
      margin-bottom: ${SECONDARY_SPACING_EM};
    }

    a {
      margin: auto;
    }
  }
`;
