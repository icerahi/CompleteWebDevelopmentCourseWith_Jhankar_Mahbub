import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./Login.css";

const Login = () => {
  const {signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location?.state?.from?.pathname || "/";
  
  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => history.push(redirect_uri));
  };

  return (
    <div className="login-form">
      <div>
        <form>
          <input type="email" placeholder="Your Email" /> <br />
          <input type="password" placeholder="Your password" /> <br />
          <input type="submit" value="Login" /> <br />
        </form>
        <hr />
        <button onClick={handleGoogleLogin}>Google</button>
      </div>
    </div>
  );
};

export default Login;
