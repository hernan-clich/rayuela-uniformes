import { TFontColors } from './fontInterfaces';
import { THTMLTextElements } from './generalInterfaces';

export type THomeItem = {
  id: string;
  name: string;
  img: string;
  fontColor: TFontColors;
  asHtmlElement: THTMLTextElements;
};
