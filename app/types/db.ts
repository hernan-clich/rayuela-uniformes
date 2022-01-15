export enum EDbCollections {
  orders = 'orders',
  products = 'products'
}

export type TDbCollections = keyof typeof EDbCollections;
