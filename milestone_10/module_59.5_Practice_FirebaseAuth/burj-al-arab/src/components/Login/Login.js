import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../context/useAuth";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    registerUser,
    loginUser,
    addUsername,
    signInWithYahoo,
  } = useAuth();

  const [showLogin, setShowLogin] = useState(true);

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location?.state?.from?.pathname || "/";

  const googleLogin = () => {
    signInWithGoogle().then(() => {
      history.push(redirect_uri);
    });
  };
  const githubLogin = () => {
    signInWithGithub().then(() => {
      history.push(redirect_uri);
    });
  };
  const facebookLogin = () => {
    signInWithFacebook().then(() => {
      history.push(redirect_uri);
    });
  };  
  const yahooLogin = () => {
    signInWithYahoo().then(() => {
      history.push(redirect_uri);
    });
  };

  const RegisterWithEmailPassword = (email, password) => {
    registerUser(email, password)
      .then(() => {
        const username = prompt("Username:");
        addUsername(username);

        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };
  const LoginWithEmailPassword = (email, password) => {
    loginUser(email, password)
      .then(() => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>
    showLogin
      ? LoginWithEmailPassword(data.email, data.password)
      : RegisterWithEmailPassword(data.email, data.password);

  const renderRegister = () => {
    return (
      <div>
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your email"
            {...register("email", { required: true })}
          />
          <input
            placeholder="Your Password"
            {...register("password", { required: true })}
          />

          <input type="submit" value="Register" />
          <p>
            Already have an account?{" "}
            <button onClick={() => setShowLogin(true)}>Login</button>{" "}
          </p>
        </form>
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div>
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your email"
            {...register("email", { required: true })}
          />
          <input
            placeholder="Your Password"
            {...register("password", { required: true })}
          />

          <input type="submit" value="Login" />
          <p>
            Create a account ?{" "}
            <button onClick={() => setShowLogin(false)}>Register</button>{" "}
          </p>
        </form>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <div>
        <p style={{ color: "red" }}>{error}</p>
        {showLogin ? renderLogin() : renderRegister()}

        <p>--------------OR----------------</p>
        <button onClick={googleLogin}>Google</button>
        <button onClick={githubLogin}>Github</button>
        <button onClick={facebookLogin}>Facebook</button>
        <button onClick={yahooLogin}>Yahoo</button>
      </div>
    </div>
  );
};

export default Login;
