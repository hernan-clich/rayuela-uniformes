import styled from 'styled-components';

type Props = {
  readonly $isActive?: boolean;
};

export const ArrowSvg = styled.svg<Props>`
  transform: ${({ $isActive }) => ($isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
