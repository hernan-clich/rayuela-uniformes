import HeaderBox from '@screens/Home/components/HeaderBox';
import useWindowSize from '@hooks/useWindowSize';
import { EFontColors, TFontColors } from '@interfaces/fontInterfaces';

import * as Styled from './styles';
import { defineHeight } from './utils';

type Props = {
  bgImg: string;
  boxTitle: string;
  squaredShape: boolean;
  fontColor?: TFontColors;
};

function SingleBox({ bgImg, boxTitle, fontColor, squaredShape }: Props) {
  const { width } = useWindowSize();

  const elementHeight = defineHeight(width, squaredShape);
  const isSecondary = fontColor === EFontColors.secondary;

  return (
    <Styled.SingleBoxContainer bgImg={bgImg} height={elementHeight}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText={boxTitle}
        secondary={isSecondary}
      />
    </Styled.SingleBoxContainer>
  );
}

export default SingleBox;
