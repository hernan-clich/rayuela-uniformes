import styled from 'styled-components';
import { PRIMARY_SPACING_EM } from '@styles/variables';

type Props = {
  readonly width: number;
};

const SchoolsContainer = styled.div<Props>`
  background-color: yellow;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: ${({ width }) => (width < 900 ? '1fr' : '1fr 1fr')};
  height: auto;
  margin: 0 ${PRIMARY_SPACING_EM} ${PRIMARY_SPACING_EM};
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);

  .single-school {
    background-color: red;
    height: 0;
    padding-top: 100%;
    width: 100%;
  }
`;

export default SchoolsContainer;
