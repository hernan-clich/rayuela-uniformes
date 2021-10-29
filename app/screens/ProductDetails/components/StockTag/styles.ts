import styled from 'styled-components';
import { GREEN_HAZE, MONZA } from '~styles/colors';

type Props = {
  readonly hasStock: boolean;
};

export const StockTagContainer = styled.div<Props>`
  background-color: ${({ hasStock }) => (hasStock ? GREEN_HAZE : MONZA)};
  display: inline-block;
  padding: 10px;
`;
