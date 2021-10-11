import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInWithGithub =()=>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      setUser(result.user)
    })
  }
  const SignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => setError(error.message));
  }

  const logOut =()=>{
    signOut(auth)
    .then(()=> setUser({}))
  }

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
         setUser(user)
      }
    })
  },[])

  return {
    user,
    error,
    logOut,
    SignInWithGoogle,
    signInWithGithub,
  };
};


export default useFirebase;
