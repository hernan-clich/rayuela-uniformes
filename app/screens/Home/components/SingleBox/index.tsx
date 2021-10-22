import HeaderBox from '~screens/Home/components/HeaderBox';
import useWindowSize from '~hooks/useWindowSize';
import { EFontColors, TFontColors } from '~types/fonts';
import { THTMLTextElements } from '~types/general';

import * as Styled from './styles';
import { defineHeight } from './utils';

type Props = {
  bgImg: string;
  boxTitle: string;
  squaredShape: boolean;
  asHtmlElement: THTMLTextElements;
  fontColor?: TFontColors;
};

function SingleBox({ asHtmlElement, bgImg, boxTitle, fontColor, squaredShape }: Props) {
  const { width } = useWindowSize();

  const elementHeight = defineHeight(width, squaredShape);
  const isSecondary = fontColor === EFontColors.secondary;

  return (
    <Styled.SingleBoxContainer bgImg={bgImg} height={elementHeight}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        asHtmlElement={asHtmlElement}
        buttonText="Comprar"
        titleText={boxTitle}
        secondary={isSecondary}
      />
    </Styled.SingleBoxContainer>
  );
}

export default SingleBox;
