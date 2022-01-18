import {
  collection,
  documentId,
  onSnapshot,
  query,
  QueryConstraint,
  where,
  WhereFilterOp
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '~config/firebase/client';
import { EDbCollections, TDbCollections } from '~types/db';

function useDbSnapshot<T extends { id: string }>(
  collectionName: TDbCollections,
  docId?: string,
  customQuery?: { fieldPath: string; opStr: WhereFilterOp; value: string }[]
): { data: T[]; loading: boolean } {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const colRef = collection(db, EDbCollections[collectionName]);
  const customQueries = customQuery?.map(({ fieldPath, opStr, value }) =>
    where(fieldPath, opStr, value)
  );
  const dbQuery = customQuery?.length
    ? query(colRef, ...((customQueries as QueryConstraint[]) || []))
    : docId
    ? query(colRef, where(documentId(), '==', docId))
    : query(colRef);

  useEffect(
    () =>
      onSnapshot(
        dbQuery,
        (snapshot) => {
          setLoading(false);
          setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as unknown as T)));
        },
        // eslint-disable-next-line no-console
        (err) => console.error(err),
        () => {
          setLoading(false);
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { data, loading };
}

export default useDbSnapshot;
