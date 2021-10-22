import styled from 'styled-components';
import { PORCELAIN, PRUSSIAN_BLUE, TRANSPARENT, WHITE } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

type FilterItemContainerProps = {
  readonly $isActive: boolean;
};

export const FilterItemContainer = styled.div<FilterItemContainerProps>`
  background-color: ${WHITE};
  border-bottom: 1px solid ${TRANSPARENT};
  border-left: ${({ $isActive }) =>
    $isActive ? `1px solid ${PRUSSIAN_BLUE}` : `1px solid ${TRANSPARENT}`};
  border-right: ${({ $isActive }) =>
    $isActive ? `1px solid ${PRUSSIAN_BLUE}` : `1px solid ${TRANSPARENT}`};
  border-top: ${({ $isActive }) =>
    $isActive ? `1px solid ${PRUSSIAN_BLUE}` : `1px solid ${TRANSPARENT}`};
  cursor: pointer;
  display: flex;
  height: 80%;
  margin-right: ${PRIMARY_SPACING_EM};
  padding: 12px calc(${SECONDARY_SPACING_EM}) 8px;
  position: relative;

  &:hover {
    border: 1px solid ${PRUSSIAN_BLUE};
    border-bottom: ${({ $isActive }) =>
      $isActive ? `1px solid ${TRANSPARENT}` : `1px solid ${PRUSSIAN_BLUE}`};
  }

  &::after {
    background-color: ${({ $isActive }) => ($isActive ? WHITE : TRANSPARENT)};
    bottom: -1px;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 3;
  }

  span {
    margin-right: 8px;
  }
`;

export const SingleListItem = styled.div`
  background-color: ${WHITE};
  border: 1px solid ${PRUSSIAN_BLUE};
  display: flex;
  flex-flow: column nowrap;
  left: -1px;
  position: absolute;
  top: calc(100%);
  width: 300px;
  z-index: 1;

  div {
    padding: 0.5em 0 1em;
  }

  button {
    padding: 0.75em;
    text-align: left;
    user-select: none;
    width: 100%;

    &:hover {
      background-color: ${PORCELAIN};
    }
  }
`;
