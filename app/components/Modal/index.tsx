import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from '~hooks/useOnClickOutside';
import * as Styled from './styles';

type Props = {
  children: ReactNode;
  onClose: () => void;
  showModal: boolean;
  closeOnClickOutside?: boolean;
};

const Modal = ({ showModal, onClose, children, closeOnClickOutside = true }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalContainerRef, onClose);

  useEffect(() => setIsBrowser(true), []);

  const modalContent = showModal && (
    <Styled.ModalOverlay>
      <div className="modalContainer" ref={closeOnClickOutside ? modalContainerRef : null}>
        <div className="closeBtnContainer">
          {closeOnClickOutside && (
            <button className="closeBtn" type="button" onClick={onClose}>
              ✕
            </button>
          )}
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </Styled.ModalOverlay>
  );

  if (!isBrowser) return null;

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root') as HTMLElement);
};

export default Modal;
