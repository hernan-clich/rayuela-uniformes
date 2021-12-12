import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '~config/firebase/client';
import { EDbCollections, TDbCollections } from '~types/db';

function useDbQuery(collectionName: TDbCollections) {
  const [data, setData] = useState<unknown[]>([]);
  const colRef = collection(db, EDbCollections[collectionName]);
  const dbQuery = query(colRef);

  useEffect(
    () =>
      onSnapshot(dbQuery, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return [data];
}

export default useDbQuery;
