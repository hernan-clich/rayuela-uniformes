import styled from 'styled-components';
import { PRUSSIAN_BLUE, WHITE } from '~styles/colors';
import { PRIMARY_FONT } from '~styles/variables';
import { EFontSizes, EFontWeights, ETextAlign, ETextTransform } from '~types/fonts';

type Props = {
  readonly size: keyof typeof EFontSizes;
  readonly weight: keyof typeof EFontWeights;
  readonly isUnselectable?: boolean;
  readonly secondary?: boolean;
  readonly textAlign?: keyof typeof ETextAlign;
  readonly textTransform?: keyof typeof ETextTransform;
};

const CustomText = styled.h1<Props>`
  color: ${({ secondary }) => (secondary ? WHITE : PRUSSIAN_BLUE)};
  font-family: ${PRIMARY_FONT};
  font-size: ${({ size }) => EFontSizes[size]};
  font-weight: ${({ weight }) => EFontWeights[weight]};
  margin: 0;
  text-align: ${({ textAlign }) => (textAlign ? ETextAlign[textAlign] : ETextAlign.center)};
  text-transform: ${({ textTransform }) =>
    textTransform ? ETextTransform[textTransform] : ETextTransform.none};
  user-select: ${({ isUnselectable }) => (isUnselectable ? 'none' : 'text')};
`;

export default CustomText;
