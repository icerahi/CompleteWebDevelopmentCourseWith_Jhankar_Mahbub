import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  OAuthProvider
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInit from "../firebase/Firebase.init";

firebaseAuthInit();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const yahooProvider = new OAuthProvider('yahoo.com');


  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };  
  const signInWithYahoo = () => {
    return signInWithPopup(auth, yahooProvider);
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const addUsername = (username) => {
    return updateProfile(auth.currentUser, { displayName: username });
  };

  const logOut = () => {
    signOut(auth).then(() => setUser(null));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  return {
    user,
    signInWithGoogle,
    logOut,
    signInWithGithub,
    signInWithFacebook,
    registerUser,
    loginUser,
    addUsername,
    signInWithYahoo,
  };
};

export default useFirebase;
