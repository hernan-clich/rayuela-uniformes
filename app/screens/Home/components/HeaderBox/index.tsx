import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { THTMLTextElements } from '@interfaces/generalInterfaces';
import * as Styled from './styles';
import { TAlignment } from './types';

type Props = {
  asHtmlElement: THTMLTextElements;
  alignment: TAlignment;
  buttonText: string;
  titleText: string;
  secondary?: boolean;
};

function HeaderBox({ asHtmlElement, alignment, buttonText, secondary, titleText }: Props) {
  return (
    <Styled.HeaderBoxContainer alignment={alignment}>
      <div className="inner-wrapper">
        <CustomText
          as={asHtmlElement}
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
