import HeaderBox from '@screens/Home/components/HeaderBox';
import useWindowSize from '@hooks/useWindowSize';
import { EFontColors, TFontColors } from '@interfaces/fontInterfaces';

import SingleBoxContainer from './styles';
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
    <SingleBoxContainer bgImg={bgImg} height={elementHeight}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText={boxTitle}
        secondary={isSecondary}
      />
    </SingleBoxContainer>
  );
}

export default SingleBox;
