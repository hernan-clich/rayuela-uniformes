import styled from 'styled-components';
import { PRIMARY_SPACING } from '@styles/variables';

type Props = {
  readonly bgImg: string;
};

const HeroContainer = styled.div<Props>`
  background: url(${({ bgImg }) => bgImg}) no-repeat;
  background-position: 90% 0%;
  background-size: cover;
  height: calc(90vh - ${PRIMARY_SPACING});
  margin: 0 ${PRIMARY_SPACING} ${PRIMARY_SPACING};
  width: calc(100vw - ${PRIMARY_SPACING} * 2);
`;

export default HeroContainer;
