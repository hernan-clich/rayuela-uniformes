import styled from 'styled-components';
import { SECONDARY_SPACING_EM } from '~styles/variables';

export const GoogleButtonContent = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  svg {
    margin-right: ${SECONDARY_SPACING_EM};
  }
`;
