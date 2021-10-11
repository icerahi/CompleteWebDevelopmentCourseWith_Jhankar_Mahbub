import logo from "./logo.svg";
import "./App.css";
import initializeAuthentiation from "./firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";

initializeAuthentiation();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return (
    <div className="App">
      {user.name ? (
        <button onClick={signOut}>Signout({user.name})</button>
      ) : (
        <div>
          {" "}
          <button onClick={handleGoogleSignIn}>Google Signin</button>
          <button onClick={handleGithubSignIn}>Github Signin</button>
        </div>
      )}
      <br />
      {user.name && (
        <div>
          <h2>Welcome {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
