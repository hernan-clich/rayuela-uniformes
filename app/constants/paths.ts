const PATHS = {
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_PRODUCT_FORM: '/admin/products/product-form',
  ADMIN_PRODUCT_FORM_EDIT: '/admin/products/product-form/[id]',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_USERS: '/admin/users',
  CART: '/cart',
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/product/[slug]',
  PROFILE: '/profile',
  ORDER: '/profile/order/[id]'
} as const;

export const API_ROUTES = {
  GRANT_ADMIN_ROLE: '/api/grant-admin-role'
} as const;

export default PATHS;
