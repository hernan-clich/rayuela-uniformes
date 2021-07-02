import styled from 'styled-components';
import { EFontWeights, ETextAlign, ETextTransform } from '@interfaces/fontInterfaces';
import { PRIMARY_FONT } from '@styles/variables';

type Props = {
  readonly weight: keyof typeof EFontWeights;
  readonly textAlign?: keyof typeof ETextAlign;
  readonly textTransform?: keyof typeof ETextTransform;
};

const CustomText = styled.h1<Props>`
  font-family: ${PRIMARY_FONT};
  font-weight: ${({ weight }) => EFontWeights[weight]};
  text-align: ${({ textAlign }) => (textAlign ? ETextAlign[textAlign] : ETextAlign.center)};
  text-transform: ${({ textTransform }) =>
    textTransform ? ETextTransform[textTransform] : ETextTransform.none};
`;

export default CustomText;
