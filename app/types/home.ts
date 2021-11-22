import type { TFeaturedId, TFeaturedName } from '~types/product';
import type { TSchoolIds, TSchoolNames } from '~types/schools';
import { TFontColors } from './fonts';
import { THTMLTextElements } from './general';

export type THomeItem = {
  id: TSchoolIds | TFeaturedId;
  name: TSchoolNames | TFeaturedName;
  img: string;
  fontColor: TFontColors;
  asHtmlElement: THTMLTextElements;
};
