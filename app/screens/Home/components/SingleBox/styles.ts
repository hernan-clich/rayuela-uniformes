import styled from 'styled-components';

type Props = {
  readonly bgImg: string;
  readonly height: string;
};

const SingleBoxContainer = styled.div.attrs<Props>(({ height }) => ({
  style: { height }
}))<Props>`
  background: url(${({ bgImg }) => bgImg}) no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  width: 100%;
`;

export default SingleBoxContainer;
