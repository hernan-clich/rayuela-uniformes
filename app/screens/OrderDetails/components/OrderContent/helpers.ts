import { API_ROUTES } from '~constants/paths';
import { TOrder } from '~types/order';

export const payCurrentOrder = async (req: { order: TOrder }): Promise<{ redirectUrl: string }> => {
  const response = await fetch(API_ROUTES.PAY_ORDER, {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await response.json();
  return data;
};
