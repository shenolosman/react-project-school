import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ childred }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("Auth state: " + state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {childred}
    </AuthContext.Provider>
  );
};
