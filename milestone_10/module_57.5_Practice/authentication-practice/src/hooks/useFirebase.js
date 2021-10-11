import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInit from "../firebase/firebase.init";

firebaseAuthInit();

const useFirebase = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  const logOut=()=>{
      signOut(auth)
      .then(()=> setUser(null))
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      console.log('on auth state change',user);
        if(user){
            setUser(user)
        }
    });
  }, []);
 
  return {
    user,
    signInWithGoogle,
    logOut,
  };
};
export default useFirebase;
