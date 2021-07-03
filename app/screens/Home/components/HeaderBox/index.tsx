import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import HeaderBoxContainer from './styles';
import { TAlignment } from './types';

type Props = {
  alignment: TAlignment;
  buttonText: string;
  titleText: string;
};

function HeaderBox({ alignment, buttonText, titleText }: Props) {
  return (
    <HeaderBoxContainer alignment={alignment}>
      <div className="inner-wrapper">
        <CustomText
          size="big"
          textAlign={alignment.horizontal}
          textTransform="uppercase"
          weight="black"
          secondary>
          {titleText}
        </CustomText>
        <CustomButton size="small" weight="bold" textTransform="uppercase">
          {buttonText}
        </CustomButton>
      </div>
    </HeaderBoxContainer>
  );
}

export default HeaderBox;
