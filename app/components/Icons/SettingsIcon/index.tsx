import ResizableSvg from '~components/RezisableSvg';
import { MOBILE_BR } from '~styles/variables';

function SettingsIcon() {
  return (
    <ResizableSvg
      breakpoint={MOBILE_BR}
      svgSizes={{ defaultWidth: 44, heightRatio: 1, minWidth: 33 }}
    >
      <path
        d="M39 25.5071V19.4929C36.0465 18.4396 35.2517 18.3901 34.8379 17.3905C34.4212 16.3881 34.952 15.7831 36.294 12.9589L32.0411 8.706C29.2554 10.0301 28.6201 10.5815 27.6081 10.1621C26.6085 9.74687 26.5521 8.93975 25.5085 6H19.4929C18.4424 8.948 18.3929 9.74687 17.3905 10.1621C16.3565 10.5925 15.7364 10.0246 12.9589 8.706L8.706 12.9589C10.0494 15.7845 10.5787 16.3867 10.1621 17.3919C9.74687 18.3915 8.95075 18.4424 6 19.4929V25.5085C8.94112 26.5535 9.74687 26.6085 10.1621 27.6095C10.5801 28.6187 10.0508 29.2141 8.706 32.0411L12.9589 36.294C15.7075 34.9877 16.3551 34.4061 17.3905 34.8379C18.3915 35.2531 18.441 36.0479 19.4929 39H25.5071C26.5494 36.0699 26.6058 35.2559 27.6205 34.8324C28.6449 34.4089 29.2512 34.9685 32.0411 36.2926L36.294 32.0397C34.9534 29.221 34.4212 28.6133 34.8379 27.6081C35.2504 26.6099 36.0479 26.559 39 25.5071V25.5071ZM32.2969 26.5576C31.5035 28.4744 32.2034 29.9374 32.9679 31.4774L31.4774 32.9679C29.9745 32.2213 28.506 31.4884 26.5645 32.2941C24.645 33.093 24.1032 34.622 23.556 36.25H21.4468C20.8995 34.6206 20.3591 33.0916 18.4451 32.2969C16.494 31.4884 14.998 32.235 13.524 32.9679L12.0349 31.4774C12.8007 29.9401 13.5006 28.4799 12.7045 26.5549C11.9084 24.6423 10.3794 24.1019 8.75 23.5546V21.4468C10.3794 20.8995 11.9084 20.3591 12.7031 18.4438C13.4979 16.527 12.7966 15.0626 12.0321 13.5226L13.5226 12.0321C15.0104 12.7719 16.4954 13.513 18.4451 12.7031C20.3591 11.9097 20.8995 10.3794 21.4468 8.75H23.556C24.1032 10.3794 24.645 11.9084 26.559 12.7031C28.5101 13.5116 30.0048 12.765 31.4801 12.0321L32.9706 13.5226C32.2061 15.064 31.5063 16.5297 32.2996 18.4451C33.093 20.3577 34.622 20.8981 36.2528 21.4468V23.556C34.6193 24.1032 33.0875 24.6436 32.2969 26.5576V26.5576ZM22.5 18.375C24.7743 18.375 26.625 20.2257 26.625 22.5C26.625 24.7743 24.7743 26.625 22.5 26.625C20.2257 26.625 18.375 24.7743 18.375 22.5C18.375 20.2257 20.2257 18.375 22.5 18.375ZM22.5 15.625C18.7022 15.625 15.625 18.7022 15.625 22.5C15.625 26.2978 18.7022 29.375 22.5 29.375C26.2978 29.375 29.375 26.2978 29.375 22.5C29.375 18.7022 26.2978 15.625 22.5 15.625Z"
        fill="#001F47"
      />
    </ResizableSvg>
  );
}

export default SettingsIcon;
