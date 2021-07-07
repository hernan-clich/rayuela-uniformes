import { SMALL_BR, MEDIUM_BR, SECONDARY_SPACING_EM } from '@styles/variables';

export const defineHeight = (width: number, isSquared: boolean): string => {
  if (isSquared) {
    return width > SMALL_BR
      ? `calc(50vw - ${SECONDARY_SPACING_EM} * 3)`
      : `calc(100vw - ${SECONDARY_SPACING_EM} * 4)`;
  }
  return width > MEDIUM_BR
    ? `calc(25vw - ${SECONDARY_SPACING_EM} * 2.5)`
    : `calc(70vw - ${SECONDARY_SPACING_EM} * 4)`;
};
