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
      <Styled.InnerWrapper alignment={alignment}>
        <CustomText
          as={asHtmlElement}
          size="big"
          textAlign={alignment.horizontal}
          textTransform="uppercase"
          weight="black"
          secondary={secondary}
        >
          {titleText}
        </CustomText>
        <CustomButton size="small" weight="bold" textTransform="uppercase">
          {buttonText}
        </CustomButton>
      </Styled.InnerWrapper>
    </Styled.HeaderBoxContainer>
  );
}

export default HeaderBox;
