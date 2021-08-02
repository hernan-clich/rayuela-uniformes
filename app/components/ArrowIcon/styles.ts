import styled from 'styled-components';

type Props = {
  readonly $isActive?: boolean;
};

const Svg = styled.svg<Props>`
  transform: ${({ $isActive }) => ($isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export default Svg;
