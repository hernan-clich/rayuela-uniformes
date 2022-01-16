export enum EDbCollections {
  orders = 'orders',
  products = 'products',
  users = 'users'
}

export type TDbCollections = keyof typeof EDbCollections;
