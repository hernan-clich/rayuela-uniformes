import styled from 'styled-components';
import { EFontSizes, EFontWeights, ETextTransform } from '@interfaces/fontInterfaces';
import { primary, white } from 'app/styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '@styles/variables';

type Props = {
  readonly size: keyof typeof EFontSizes;
  readonly weight: keyof typeof EFontWeights;
  readonly secondary?: boolean;
  readonly textTransform?: keyof typeof ETextTransform;
};

const CustomButton = styled.button<Props>`
  background-color: ${({ secondary }) => (secondary ? white : primary)};
  color: ${({ secondary }) => (secondary ? primary : white)};
  font-size: ${({ size }) => EFontSizes[size]};
  font-weight: ${({ weight }) => EFontWeights[weight]};
  max-width: 10em;
  padding: ${SECONDARY_SPACING_EM} ${PRIMARY_SPACING_EM};
  text-transform: ${({ textTransform }) =>
    textTransform ? ETextTransform[textTransform] : ETextTransform.none};
`;

export default CustomButton;
