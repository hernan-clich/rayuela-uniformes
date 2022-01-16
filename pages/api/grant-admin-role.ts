import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { auth, db } from '~config/firebase/admin';

export default nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const parsedBody = JSON.parse(req.body);
    const user = await auth.getUserByEmail(parsedBody.email);

    await auth.setCustomUserClaims(user.uid, { isAdmin: parsedBody.adminStatus });
    await db
      .collection('users')
      .doc(user.uid)
      .set({ isAdmin: parsedBody.adminStatus }, { merge: true });

    res.status(200).json({
      message: parsedBody.adminStatus
        ? `Admin rights granted for: ${user.email}`
        : `Admin rights removed for: ${user.email}`
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
