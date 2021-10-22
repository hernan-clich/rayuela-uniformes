import styled from 'styled-components';
import { MEDIUM_BR, PRIMARY_SPACING_EM } from '~styles/variables';

type Props = {
  readonly width: number;
};

export const FeaturedContainer = styled.div<Props>`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: ${({ width }) => (width < MEDIUM_BR ? '1fr' : 'repeat(3, 1fr)')};
  height: auto;
  margin: 0 ${PRIMARY_SPACING_EM} ${PRIMARY_SPACING_EM};
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);
`;
