import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  useEffect(() => {
    return () => setCancel(true);
  }, []);
  const signup = async (email, password, displayName) => {
    setError(null);
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      if (!res) {
        throw new Error("Error occured while registering!");
      }

      await updateProfile(res.user, { displayName });

      dispatch({ type: "LOGIN", payload: res.user });

      if (!cancel) {
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      if (!cancel) {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      }
    }
  };

  return { signup, error, loading };
};
