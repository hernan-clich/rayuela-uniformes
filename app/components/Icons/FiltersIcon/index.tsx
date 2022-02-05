import ResizableSvg from '~components/RezisableSvg';
import { MOBILE_BR } from '~styles/variables';

function FiltersIcon() {
  return (
    <ResizableSvg
      breakpoint={MOBILE_BR}
      svgSizes={{ defaultWidth: 44, heightRatio: 1, minWidth: 33 }}
    >
      <path
        d="M14 29.6667H11.3333V36.3333H8.66667V29.6667H6V25.6667H14V29.6667ZM11.3333 7H8.66667V23H11.3333V7ZM26 16.3333H18V20.3333H20.6667V36.3333H23.3333V20.3333H26V16.3333ZM23.3333 7H20.6667V13.6667H23.3333V7ZM38 25.6667H30V29.6667H32.6667V36.3333H35.3333V29.6667H38V25.6667ZM35.3333 7H32.6667V23H35.3333V7Z"
        fill="#001F47"
      />
    </ResizableSvg>
  );
}

export default FiltersIcon;
