import styled from 'styled-components';
import { PRUSSIAN_BLUE, SILVER } from '~styles/colors';
import { PRIMARY_FONT, SECONDARY_SPACING_EM } from '~styles/variables';
import { EFontSizes } from '~types/fonts';

export const AddNewProductFormContainer = styled.div`
  .form {
    display: flex;
    flex-flow: column nowrap;
  }

  input[type='text'] {
    border: 1px solid ${SILVER};
    border-radius: 4px;
    color: ${PRUSSIAN_BLUE};
    font-family: ${PRIMARY_FONT};
    font-size: ${EFontSizes.small};
    margin-bottom: ${SECONDARY_SPACING_EM};
    padding: 10px ${SECONDARY_SPACING_EM} 8px;
  }
`;
