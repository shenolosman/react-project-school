import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const useCollection = (col, _q, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const q = useRef(_q).current;
  const orderby = useRef(_orderBy).current; //this should be created manuel on firebase website and should create indexes with seleted 2 var
  useEffect(() => {
    let ref = collection(db, col);

    if (q) {
      ref = query(ref, where(...q));
    }
    if (orderby) {
      ref = query(ref, orderBy(...orderby));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];

        snapshot.docs.forEach((x) => {
          results.push({ ...x.data(), id: x.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Data couldnt fetch");
      }
    );
    return () => unsubscribe();
  }, [col, q]);

  return { documents, error };
};
