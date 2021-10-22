import { TFontColors } from './fonts';
import { THTMLTextElements } from './general';

export type THomeItem = {
  id: string;
  name: string;
  img: string;
  fontColor: TFontColors;
  asHtmlElement: THTMLTextElements;
};
