export enum EHTMLTextElements {
  b = 'b',
  big = 'big',
  del = 'del',
  em = 'em',
  code = 'code',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  li = 'li',
  i = 'i',
  p = 'p',
  pre = 'pre',
  samp = 'samp',
  small = 'small',
  span = 'span',
  strong = 'strong',
  sub = 'sub',
  sup = 'sup'
}

export type THTMLTextElements = keyof typeof EHTMLTextElements;

export enum ESingleFilterAlias {
  school = 'school',
  categories = 'categories'
}

export type TSingleFilterAlias = keyof typeof ESingleFilterAlias;

export type TSingleFilterItem = {
  alias: TSingleFilterAlias;
  id: string;
  name: string;
};
