import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (col) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, col);
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
