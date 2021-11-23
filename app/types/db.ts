export enum EDbCollections {
  products = 'products'
}

export type TDbCollections = keyof typeof EDbCollections;
