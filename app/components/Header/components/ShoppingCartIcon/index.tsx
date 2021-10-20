import ResizableSvg from '@components/RezisableSvg';
import { MOBILE_BR } from '@styles/variables';

function ShoppingCartIcon() {
  return (
    <ResizableSvg
      breakpoint={MOBILE_BR}
      svgSizes={{ defaultWidth: 44, heightRatio: 1, minWidth: 33 }}
    >
      <path
        d="M0 5.5L1.36217 9.16667H4.89867L11.2677 31.1667H35.5392L44 11H13.178L14.212 14.6667H38.4853L33.1008 27.5H13.9828L7.69083 5.5H0ZM28.4167 33C29.9347 33 31.1667 34.232 31.1667 35.75C31.1667 37.2698 29.9347 38.5 28.4167 38.5C26.8987 38.5 25.6667 37.2698 25.6667 35.75C25.6667 34.232 26.8987 33 28.4167 33ZM15.7667 20.1667L19.25 33C20.768 33 22 34.2302 22 35.75C22 37.2698 20.768 38.5 19.25 38.5C17.732 38.5 16.5 37.2698 16.5 35.75C16.5 34.232 17.732 33 19.25 33L15.7667 20.1667Z"
        fill="#001F47"
      />
    </ResizableSvg>
  );
}

export default ShoppingCartIcon;
