import {
  collection,
  documentId,
  onSnapshot,
  query,
  QueryConstraint,
  where,
  WhereFilterOp
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { db } from '~config/firebase/client';
import { EDbCollections, TDbCollections } from '~types/db';
import { useAuth } from './useAuth';

export type TCustomQuery = { fieldPath: string; opStr: WhereFilterOp; value: string }[];

function useDbSnapshot<T extends { id: string }>(
  collectionName: TDbCollections,
  docId?: string,
  customQuery?: TCustomQuery
): { data: T[]; loading: boolean } {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const colRef = collection(db, EDbCollections[collectionName]);
  const customQueries = useMemo(
    () => customQuery?.map(({ fieldPath, opStr, value }) => where(fieldPath, opStr, value)),
    [customQuery]
  );
  const dbQuery = customQueries?.length
    ? query(colRef, ...((customQueries as QueryConstraint[]) || []))
    : docId
    ? query(colRef, where(documentId(), '==', docId))
    : query(colRef);

  useEffect(() => {
    if (!isAuthenticated) return;

    const unsubSnap = onSnapshot(
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
    );

    return () => unsubSnap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, isAuthenticated]);

  return { data, loading };
}

export default useDbSnapshot;
