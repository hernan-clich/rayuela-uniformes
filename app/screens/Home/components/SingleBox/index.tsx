import type { Url } from 'url';
import HeaderBox from '~screens/Home/components/HeaderBox';
import useWindowSize from '~hooks/useWindowSize';
import { EFontColors, TFontColors } from '~types/fonts';
import { THTMLTextElements } from '~types/general';

import * as Styled from './styles';
import { defineHeight } from './utils';
import { motion } from 'framer-motion';

type Props = {
  bgImg: string;
  boxTitle: string;
  squaredShape: boolean;
  asHtmlElement: THTMLTextElements;
  path: Partial<Url>;
  fontColor?: TFontColors;
};

const MotionStyledSingleBoxContainer = motion(Styled.SingleBoxContainer);

function SingleBox({ asHtmlElement, bgImg, boxTitle, fontColor, path, squaredShape }: Props) {
  const { width } = useWindowSize();

  const elementHeight = defineHeight(width, squaredShape);
  const isSecondary = fontColor === EFontColors.secondary;

  return (
    <MotionStyledSingleBoxContainer
      bgImg={bgImg}
      height={elementHeight}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        asHtmlElement={asHtmlElement}
        buttonText="Comprar"
        titleText={boxTitle}
        path={path}
        secondary={isSecondary}
      />
    </MotionStyledSingleBoxContainer>
  );
}

export default SingleBox;
