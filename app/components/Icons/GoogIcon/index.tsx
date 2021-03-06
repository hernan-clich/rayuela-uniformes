import { PRUSSIAN_BLUE, WHITE } from '~styles/colors';

type Props = {
  secondary?: boolean;
};

function GoogIcon({ secondary }: Props) {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8558 15V21H27.9827C27.5745 23.5725 24.9217 28.55 17.8558 28.55C11.7593 28.55 6.78522 23.6025 6.78522 17.5C6.78522 11.4 11.7593 6.45 17.8558 6.45C21.325 6.45 23.6462 7.9 24.9727 9.15L29.8193 4.575C26.7072 1.725 22.6769 0 17.8558 0C7.98411 0 0 7.825 0 17.5C0 27.175 7.98411 35 17.8558 35C28.1612 35 35 27.9 35 17.9C35 16.75 34.8699 15.875 34.7169 15H17.8558Z"
        fill={secondary ? WHITE : PRUSSIAN_BLUE}
      />
    </svg>
  );
}

export default GoogIcon;
