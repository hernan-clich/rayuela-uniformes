import styled from 'styled-components';
import { ALABASTER } from '@styles/colors';
import { PRIMARY_SPACING_EM } from '@styles/variables';

const FooterContainer = styled.div`
  background-color: ${ALABASTER};
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto ${PRIMARY_SPACING_EM};
  min-height: 50vh;
  width: calc(100vw - ${PRIMARY_SPACING_EM} * 2);
`;

export default FooterContainer;
