import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { auth } from '~config/firebase/admin';

export default nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const parsedBody = JSON.parse(req.body);
    const user = await auth.getUserByEmail(parsedBody.email);

    await auth.setCustomUserClaims(user.uid, { isAdmin: true });

    res.status(200).json({ message: `User ${user.email} has been made an admin` });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
