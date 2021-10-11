import logo from "./logo.svg";
import "./App.css";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import initializeAuthentication from "./firebase/firebase.init";
import { useState } from "react";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password must be at least 6 charecter");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };
///
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {
      console.log(result);
    });
  };

  const setUserName=()=>{
    updateProfile(auth.currentUser,{displayName:name})
    .then(result =>{})
  }
  return (
    <div className="w-50 mx-auto my-5">
      <form onSubmit={handleRegistration}>
        <h3 className="text-success">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Your Name
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleNameChange}
                type="text"
                className="form-control"
                id="inputName3"
                required
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? "Login" : "Register"}
        </button>
        <button
          onClick={handleResetPassword}
          className="btn btn-secondary btn-sm"
        >
          Reset Password
        </button>
      </form>
      <div>---------------------------</div>
      <br />
      <br />
      <br />
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
