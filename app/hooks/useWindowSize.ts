import { useState, useEffect } from 'react';

function useWindowSize() {
  const [sizes, setSizes] = useState({
    height: 0,
    width: 0
  });

  useEffect(() => {
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

  return { height: sizes.height, width: sizes.width };
}

export default useWindowSize;
