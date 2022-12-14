import { useEffect, useState, useReducer } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";

const startData = {
  document: null,
  loading: false,
  error: null,
  success: false,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "WAITING":
      return { error: null, document: null, success: false, loading: true };
    case "ADDED":
      return {
        error: null,
        document: action.payload,
        success: true,
        loading: false,
      };
    case "ERROR":
      return {
        error: action.payload,
        document: null,
        success: false,
        loading: false,
      };
    case "DELETED":
      return { error: null, document: null, success: true, loading: false };
    default:
      return state;
  }
};

export const useFirestore = (col) => {
  const [response, dispatch] = useReducer(firestoreReducer, startData);
  const [cancel, setCancel] = useState(false);
  const ref = collection(db, col);

  const docAdd = async (document) => {
    dispatch({ type: "WAITING" });
    try {
      const createdDate = serverTimestamp();
      const addedDoc = await addDoc(ref, { ...document, createdDate });
      if (cancel) {
        dispatch({ type: "ADDED", payload: addedDoc });
      }
    } catch (error) {
      if (!cancel) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  };
  const docDelete = async (id) => {
    dispatch({ type: "WAITING" });
    try {
      let ref = doc(db, col, id);
      await deleteDoc(ref);
      if (!cancel) {
        dispatch({ type: "DELETED" });
      }
    } catch (error) {
      if (!cancel) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  };

  useEffect(() => {
    return () => setCancel(true);
  }, []);

  return { docAdd, docDelete, response };
};
