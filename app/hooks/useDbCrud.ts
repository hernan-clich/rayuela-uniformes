import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  FieldValue,
  getDoc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { db, storage } from '~config/firebase/client';
import { EDbCollections, TDbCollections } from '~types/db';
import { TOrder } from '~types/order';
import { TProduct } from '~types/product';

type TStorageProduct = Omit<TProduct, 'id' | 'imageUrl'>;
type TOrderOmmitingId = Omit<TOrder, 'id'>;
type TAllowedNewDocs = TProduct | TStorageProduct | TOrderOmmitingId;

function useDbCrud(collectionName: TDbCollections): {
  addDbDocument: (newDocument: TAllowedNewDocs) => Promise<DocumentReference<DocumentData>>;
  deleteDbDocument: (id: string) => void;
  getDbDocument: <T>(id: string) => T | undefined;
  updateDbDocument: <T>(id: string, properties: Partial<T>) => void;
  addStorageFile: (
    newStorageFile: File,
    storageFolderName: string,
    product?: TStorageProduct
  ) => void;

  storageUploadProgress: number | null;
  storageUploadState: string | null;
  storageUploadUrl: string | null;
  timestamp: FieldValue;
} {
  const [docData, setDocData] = useState<DocumentData | undefined>(undefined);
  const [storageUploadProgress, setStorageUploadProgress] = useState<number | null>(null);
  const [storageUploadState, setStorageUploadState] = useState<string | null>(null);
  const [storageUploadUrl, setStorageUploadUrl] = useState<string | null>(null);

  const colRef = collection(db, EDbCollections[collectionName]);

  const addDbDocument = async (newDocument: TAllowedNewDocs) => await addDoc(colRef, newDocument);
  const deleteDbDocument = (id: string) => deleteDoc(doc(db, collectionName, id));
  const getDbDocument = <T>(id: string): T => {
    const docRef = doc(db, collectionName, id);

    getDoc(docRef).then((docSnap) => {
      if (!docData && docSnap.exists()) setDocData({ ...docSnap.data(), id: docSnap.id });
    });

    return docData as T;
  };
  const updateDbDocument = <T>(id: string, properties: Partial<T>) =>
    updateDoc(doc(db, collectionName, id), properties as DocumentData);

  /**
   * Uploads file into Firestore Storage
   * @public
   * @param newStorageFile: The file we're going to upload
   * @param storageFolderName: Name of the folder where the file will be uploaded in Firestore Storage
   * @param product - If provided, it will create a document in the products collection, including the newStorageFile
   * @returns void
   */
  const addStorageFile = (
    newStorageFile: File,
    storageFolderName: string,
    product?: TStorageProduct
  ) => {
    const storageRef = ref(storage, `${storageFolderName}/${newStorageFile.name}`);
    const metadata = { contentType: 'image/png' };

    const uploadTask = uploadBytesResumable(storageRef, newStorageFile, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setStorageUploadProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        if (snapshot.state === 'running') setStorageUploadState('running');
      },
      () => {
        setStorageUploadState('error');
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          setStorageUploadState('success');
          setStorageUploadUrl(downloadUrl);
          if (product) addDbDocument({ ...product, imageUrl: downloadUrl });
        } catch {
          setStorageUploadState('error');
        }
      }
    );
  };

  return {
    addDbDocument,
    addStorageFile,
    deleteDbDocument,
    getDbDocument,
    storageUploadProgress,
    storageUploadState,
    storageUploadUrl,
    timestamp: serverTimestamp(),
    updateDbDocument
  };
}

export default useDbCrud;
