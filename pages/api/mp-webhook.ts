import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { db } from '~config/firebase/admin';

export default nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const notification = req.body;

    if (notification?.type !== 'payment') return;

    const payment = await fetch(
      `https://api.mercadopago.com/v1/payments/${notification?.data?.id}?access_token=${process.env.MERCADOPAGO_ACCESS_TOKEN}`
    );
    const paymentData = await payment?.json();

    if (paymentData?.status === 'approved') {
      db.collection('orders')
        .doc(paymentData?.external_reference)
        .set({ isPayed: true, paymentId: paymentData?.id }, { merge: true });
    }

    res.status(200).json({ message: 'Notification received' });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
