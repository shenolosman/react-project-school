import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (col, _q) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const q = useRef(_q).current;
  useEffect(() => {
    let ref = collection(db, col);

    if (q) {
      ref = query(ref, where(...q));
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
  }, [col]);

  return { documents, error };
};
