import styled from 'styled-components';
import { PRIMARY_SPACING_EM, PRIMARY_SPACING_PX } from 'app/styles/variables';

type Props = {
  readonly bgImg: string;
  readonly height: number;
  readonly width: number;
};

const HeroContainer = styled.div.attrs<Props>(({ height, width }) => ({
  style: {
    height: height > width ? width - PRIMARY_SPACING_PX * 2 : '90vh'
  }
}))<Props>`
  background: url(${({ bgImg }) => bgImg}) no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  margin: 0 ${PRIMARY_SPACING_EM} ${PRIMARY_SPACING_EM};
  max-height: calc(90vh - ${PRIMARY_SPACING_EM});
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);
`;

export default HeroContainer;
