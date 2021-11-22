import styled from 'styled-components';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';
import { EHorizontal, EVertical, TAlignment } from './types';

type Props = {
  alignment: TAlignment;
};

export const HeaderBoxContainer = styled.div<Props>`
  align-self: ${({ alignment }) => EVertical[alignment.vertical]};
  align-items: ${({ alignment }) => EHorizontal[alignment.horizontal]};
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  padding: calc(${PRIMARY_SPACING_EM} * 2) 0;
  width: calc(100% - ${PRIMARY_SPACING_EM} * 2);
`;

export const InnerWrapper = styled.div<Props>`
  align-items: ${({ alignment }) => EHorizontal[alignment.horizontal]};
  display: flex;
  flex-flow: column nowrap;
  width: 60%;

  .title {
    margin: ${SECONDARY_SPACING_EM} 0;
  }

  .btn {
    margin-top: ${PRIMARY_SPACING_EM};
  }

  /* @todo: We should be using a constant for these breakoints */
  @media (max-width: 768px) {
    .title {
      margin: 0;
    }

    .btn {
      margin-top: calc(${PRIMARY_SPACING_EM} / 2);
    }
  }
`;
