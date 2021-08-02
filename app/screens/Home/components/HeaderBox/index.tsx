import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import * as Styled from './styles';
import { TAlignment } from './types';

type Props = {
  alignment: TAlignment;
  buttonText: string;
  titleText: string;
  secondary?: boolean;
};

function HeaderBox({ alignment, buttonText, secondary, titleText }: Props) {
  return (
    <Styled.HeaderBoxContainer alignment={alignment}>
      <div className="inner-wrapper">
        <CustomText
          size="big"
          textAlign={alignment.horizontal}
          textTransform="uppercase"
          weight="black"
          secondary={secondary}>
          {titleText}
        </CustomText>
        <CustomButton size="small" weight="bold" textTransform="uppercase">
          {buttonText}
        </CustomButton>
      </div>
    </Styled.HeaderBoxContainer>
  );
}

export default HeaderBox;
