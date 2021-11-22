import ResizableSvg from '~components/RezisableSvg';
import { MOBILE_BR } from '~styles/variables';

function UserIcon() {
  return (
    <ResizableSvg
      breakpoint={MOBILE_BR}
      svgSizes={{ defaultWidth: 44, heightRatio: 1, minWidth: 33 }}
    >
      <path
        d="M21.5 9C25.2909 9 28 11.8341 28 15.6264C28 19.4159 25.2909 22 21.5 22C17.7091 22 15 19.4159 15 15.6264C15 11.8341 17.7091 9 21.5 9ZM21.5 6C16.1842 6 11.875 10.3092 11.875 15.6264C11.875 20.9408 16.1842 25.2514 21.5 25.2514C26.8158 25.2514 31.125 20.9408 31.125 15.6264C31.125 10.3092 26.8158 6 21.5 6ZM30.2574 24.3604C29.574 25.0451 28.3264 25.6405 27.5 26.1506C31.125 29 32.5 32 34 35.5H22H9C10 32.5 11.5 29.5 15.5 26.1506C14.6709 25.6364 13.3971 25.019 12.7151 24.3301C6.86038 28.5541 5 36.0259 5 39H38C38 36.0547 36.02 28.6091 30.2574 24.3604Z"
        fill="#001F47"
      />
    </ResizableSvg>
  );
}

export default UserIcon;
