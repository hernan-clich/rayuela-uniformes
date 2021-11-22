import styled from 'styled-components';
import { WILD_SAND } from '~styles/colors';

export const PrivateLayoutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const ChildrenContainer = styled.div`
  background-color: ${WILD_SAND};
  border-radius: 10px;
  height: calc(100vh - 2em);
  margin: 1em 1em 1em 0;
  width: calc(100vw - 90px - 2em);
`;
