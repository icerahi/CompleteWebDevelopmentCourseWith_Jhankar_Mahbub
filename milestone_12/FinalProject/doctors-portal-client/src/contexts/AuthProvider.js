import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const getAuthData = useFirebase();
  return (
    <AuthContext.Provider value={getAuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
