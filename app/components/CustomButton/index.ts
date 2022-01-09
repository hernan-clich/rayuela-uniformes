import styled from 'styled-components';
import { PRUSSIAN_BLUE, WHITE } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';
import { EFontSizes, EFontWeights, ETextTransform } from '~types/fonts';

type Props = {
  readonly size: keyof typeof EFontSizes;
  readonly weight: keyof typeof EFontWeights;
  readonly disabled?: boolean;
  readonly noMaxWidth?: boolean;
  readonly secondary?: boolean;
  readonly textTransform?: keyof typeof ETextTransform;
};

const CustomButton = styled.button<Props>`
  background-color: ${({ secondary }) => (secondary ? WHITE : PRUSSIAN_BLUE)};
  color: ${({ secondary }) => (secondary ? PRUSSIAN_BLUE : WHITE)};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  filter: ${({ disabled }) => disabled && 'grayscale(100%)'};
  font-size: ${({ size }) => EFontSizes[size]};
  font-weight: ${({ weight }) => EFontWeights[weight]};
  max-width: ${({ noMaxWidth }) => (noMaxWidth ? 'unset' : '10em')};
  opacity: ${({ disabled }) => disabled && '0.6'};
  padding: ${SECONDARY_SPACING_EM} ${PRIMARY_SPACING_EM};
  text-transform: ${({ textTransform }) =>
    textTransform ? ETextTransform[textTransform] : ETextTransform.none};
  transition: all 150ms ease-in;
`;

export default CustomButton;
