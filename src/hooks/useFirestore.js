import { useEffect, useState, useReducer } from "react";
import { db } from ",,/firebase/config";
import { collection } from "firebase/firestore";

const startData = {
  document: null,
  loading: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
};

export const useFirestore = (col) => {
  const [response, dispatch] = useReducer(firestoreReducer, startData);
  const [cancel, setCancel] = useState(false);

  const ref = collection(db, col);

  const docAdd = async (document) => {
};
  const docDelete = async (id) => {
};
  useEffect(() => {
    return () => setCancel(true);
  }, []);

  return {docAdd,docDelete,response}
};
