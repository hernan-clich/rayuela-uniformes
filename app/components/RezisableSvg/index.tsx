import { ReactNode, useEffect, useState } from 'react';
import useWindowSize from '~hooks/useWindowSize';

type Props = {
  children: ReactNode;
  breakpoint: number;
  svgSizes: {
    defaultWidth: number;
    minWidth: number;
    heightRatio: number;
  };
};

function ResizableSvg({ breakpoint, children, svgSizes }: Props) {
  const { defaultWidth, minWidth, heightRatio } = svgSizes;
  const { width } = useWindowSize();
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    if (width > breakpoint) setSvgWidth(defaultWidth);
    else if (width < breakpoint - (defaultWidth - minWidth)) setSvgWidth(minWidth);
    else setSvgWidth(defaultWidth - (breakpoint - width));
  }, [breakpoint, defaultWidth, minWidth, width]);

  return (
    <svg
      width={svgWidth}
      height={svgWidth * heightRatio}
      viewBox={`0 0 ${defaultWidth} ${defaultWidth * heightRatio}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export default ResizableSvg;
