import styled from 'styled-components';
import { WILD_SAND } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const PrivateLayoutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ChildrenContainer = styled.div`
  background-color: ${WILD_SAND};
  border-radius: 10px;
  height: calc(100vh - ${PRIMARY_SPACING_EM});
  margin: ${SECONDARY_SPACING_EM} ${SECONDARY_SPACING_EM} ${SECONDARY_SPACING_EM} 0;
  width: calc(100vw - 90px - ${PRIMARY_SPACING_EM});
`;
