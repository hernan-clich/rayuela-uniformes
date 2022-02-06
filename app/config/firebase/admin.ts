import * as admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

const initializeAdminApp = () => {
  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount)
      });
    } catch {
      // eslint-disable-next-line no-console
      console.error('Firebase admin initialization error');
    }
  }
};

initializeAdminApp();

export const auth = admin.auth();
export const db = admin.firestore();
