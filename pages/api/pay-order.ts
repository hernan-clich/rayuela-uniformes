import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import mercadopago from 'mercadopago';
import { TOrder, TOrderedProducts } from '~types/order';
import {
  CreatePreferencePayload,
  PreferenceItem
} from 'mercadopago/models/preferences/create-payload.model';
import { PreferenceCreateResponse } from 'mercadopago/resources/preferences';

export default nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN as string
  });

  try {
    const parsedBody = JSON.parse(req.body);
    const order: TOrder = parsedBody?.order;

    const items: PreferenceItem[] = order.orderedProducts.map((orderProd: TOrderedProducts) => ({
      currency_id: 'ARS',
      title: orderProd.product.name,
      quantity: orderProd.quantity,
      unit_price: orderProd.product.price
    }));

    const preference: CreatePreferencePayload = {
      items,
      auto_return: 'approved',
      back_urls: {
        failure: `http://localhost:3000/order/${order?.id}`,
        success: `http://localhost:3000/order/${order?.id}`
      }
    };

    const response: PreferenceCreateResponse = await mercadopago.preferences.create(preference);

    res.status(200).json({ redirectUrl: response.body.sandbox_init_point });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
