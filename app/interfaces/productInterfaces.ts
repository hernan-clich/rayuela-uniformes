import { ESingleFilterAlias, TSingleFilterAlias } from '@interfaces/generalInterfaces';

export type FilterState = {
  [ESingleFilterAlias.categories]: string;
  [ESingleFilterAlias.school]: string;
};

export type FilterAction = {
  type: TSingleFilterAlias;
  payload: string;
};
