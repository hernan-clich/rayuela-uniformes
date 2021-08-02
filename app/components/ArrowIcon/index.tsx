import * as Styled from './styles';

type Props = {
  isActive?: boolean;
};

function ArrowIcon({ isActive }: Props) {
  return (
    <Styled.ArrowSvg
      $isActive={isActive}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M10.5 2.5L12 4.0285L6 10L-6.68129e-08 4.0285L1.5 2.5L6 7L10.5 2.5Z"
          fill="#001F47"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="12" height="12" fill="white" transform="translate(12) rotate(90)" />
        </clipPath>
      </defs>
    </Styled.ArrowSvg>
  );
}

export default ArrowIcon;
