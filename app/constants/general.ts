export const isServer = typeof window === 'undefined';

// @todo: Add proper baseUrl after we have final domain
export const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';
