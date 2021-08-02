import styled from 'styled-components';

type Props = {
  readonly bgImg: string;
  readonly height: string;
};

export const SingleBoxContainer = styled.div.attrs<Props>(({ height }) => ({
  style: { height }
}))<Props>`
  background: url(${({ bgImg }) => bgImg}) no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  width: 100%;
`;
