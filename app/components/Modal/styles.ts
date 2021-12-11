import styled from 'styled-components';
import { PRUSSIAN_BLUE_OVERLAY, WHITE } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const ModalOverlay = styled.div`
  align-items: center;
  background-color: ${PRUSSIAN_BLUE_OVERLAY};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  .modalContainer {
    background-color: ${WHITE};
    border-radius: ${SECONDARY_SPACING_EM};
    height: max-content;
    padding: ${SECONDARY_SPACING_EM} ${PRIMARY_SPACING_EM};
    width: max-content;
  }

  .closeBtnContainer {
    display: flex;
    font-size: ${PRIMARY_SPACING_EM};
    justify-content: flex-end;
  }

  .closeBtn {
    padding: 8px;
    transition: transform 0.2s ease;
    user-select: none;

    &:hover {
      transform: scale(1.2);
    }
  }

  .modalBody {
    padding: ${PRIMARY_SPACING_EM} 0;
  }
`;
