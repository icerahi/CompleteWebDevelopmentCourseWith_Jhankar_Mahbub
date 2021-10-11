import React, { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  const logOut =()=>{
      signOut(auth)
      .then(()=>setUser(null))
  }
//observe whethere user auth state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
