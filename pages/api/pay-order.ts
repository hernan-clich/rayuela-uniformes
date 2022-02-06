import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import mercadopago from 'mercadopago';
import {
  CreatePreferencePayload,
  PreferenceItem
} from 'mercadopago/models/preferences/create-payload.model';
import { PreferenceCreateResponse } from 'mercadopago/resources/preferences';
import { API_ROUTES } from '~constants/paths';
import { TOrder, TOrderedProducts } from '~types/order';

export default nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  // @todo: use the real thing here before deploying
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

    // Test cards
    // https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration

    // @todo: add payment restrictions
    const preference: CreatePreferencePayload = {
      items,
      payer: {
        identification: {
          number: order.buyerId,
          type: 'user'
        },
        name: order.buyerName
      },
      binary_mode: true,
      payment_methods: {
        installments: 1,
        excluded_payment_types: [{ id: 'ticket' }]
      },
      auto_return: 'approved',
      // @todo: change these with the real stuff, this MUST be https in order to work
      notification_url: `https://5007-181-165-109-124.ngrok.io${API_ROUTES.MP_WEBHOOK}`,
      external_reference: order?.id,
      back_urls: {
        // @todo: change these with the real stuff
        failure: `http://localhost:3000/order/${order?.id}`,
        success: `http://localhost:3000/order/${order?.id}`
      }
    };

    const response: PreferenceCreateResponse = await mercadopago.preferences.create(preference);

    res.status(200).json({ redirectUrl: response.body.init_point });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
