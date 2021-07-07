import styled from 'styled-components';
import { SMALL_BR, SECONDARY_SPACING_EM } from '@styles/variables';

type Props = {
  readonly bgImg: string;
  readonly width: number;
};

const SingleSchoolContainer = styled.div.attrs<Props>(({ width }) => ({
  style: {
    height:
      width > SMALL_BR
        ? `calc(50vw - ${SECONDARY_SPACING_EM} * 3)`
        : `calc(100vw - ${SECONDARY_SPACING_EM} * 4)`
  }
}))<Props>`
  background: url(${({ bgImg }) => bgImg}) no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  width: 100%;
`;

export default SingleSchoolContainer;
