import { useState, useLayoutEffect, useMemo } from 'react';
import { SMALL_BR } from '~styles/variables';

function useWindowSize(): {
  height: number;
  isSmallScreen: boolean;
  width: number;
} {
  const [sizes, setSizes] = useState({
    height: 0,
    width: 0
  });

  const isSmallScreen = useMemo(() => sizes.width <= SMALL_BR, [sizes.width]);

  useLayoutEffect(() => {
    const setWindowSizeCallback = () =>
      setSizes({
        height: window.innerHeight,
        width: window.innerWidth
      });

    setWindowSizeCallback();

    window.addEventListener('resize', setWindowSizeCallback);

    return () => {
      window.removeEventListener('resize', setWindowSizeCallback);
    };
  }, [setSizes]);

  return {
    height: sizes.height,
    isSmallScreen,
    width: sizes.width
  };
}

export default useWindowSize;
