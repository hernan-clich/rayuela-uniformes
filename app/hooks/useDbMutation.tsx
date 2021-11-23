import { addDoc, collection } from 'firebase/firestore';
import { db } from '~config/firebase/client';
import { EDbCollections, TDbCollections } from '~types/db';

function useDbMutation(collectionName: TDbCollections): {
  addDocument: (newDocument?: unknown) => void;
} {
  // Reference to the corresponding collection
  const colRef = collection(db, EDbCollections[collectionName]);

  const addDocument = (newDocument?: unknown) => {
    addDoc(colRef, newDocument);
  };

  return { addDocument };
}

export default useDbMutation;
