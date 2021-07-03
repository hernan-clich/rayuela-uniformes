import styled from 'styled-components';
import { EFontSizes, EFontWeights, ETextAlign, ETextTransform } from '@interfaces/fontInterfaces';
import { primary, white } from '@styles/colors';
import { PRIMARY_FONT } from '@styles/variables';

type Props = {
  readonly weight: keyof typeof EFontWeights;
  readonly secondary?: boolean;
  readonly size?: keyof typeof EFontSizes;
  readonly textAlign?: keyof typeof ETextAlign;
  readonly textTransform?: keyof typeof ETextTransform;
};

const CustomText = styled.h1<Props>`
  color: ${({ secondary }) => (secondary ? white : primary)};
  font-family: ${PRIMARY_FONT};
  font-size: ${EFontSizes.xbig};
  font-weight: ${({ weight }) => EFontWeights[weight]};
  text-align: ${({ textAlign }) => (textAlign ? ETextAlign[textAlign] : ETextAlign.center)};
  text-transform: ${({ textTransform }) =>
    textTransform ? ETextTransform[textTransform] : ETextTransform.none};
`;

export default CustomText;
