import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Logo from '~components/Logo';
import * as Styled from './styles';

const Loading = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const loadingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsBrowser(true), []);

  const loadingContent = (
    <Styled.LoadingOverlay>
      <div className="loadingContainer" ref={loadingContainerRef}>
        <Logo secondary />
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    </Styled.LoadingOverlay>
  );

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    loadingContent,
    document.getElementById('loading-root') as HTMLElement
  );
};

export default Loading;
