import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '~config/firebase/client';
import { EDbCollections, TDbCollections } from '~types/db';

function useDbQuery<T extends { id: string }>(collectionName: TDbCollections): [T[]] {
  const [data, setData] = useState<T[]>([]);
  const colRef = collection(db, EDbCollections[collectionName]);
  const dbQuery = query(colRef);

  useEffect(
    () =>
      onSnapshot(dbQuery, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as unknown as T)));
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return [data];
}

export default useDbQuery;
