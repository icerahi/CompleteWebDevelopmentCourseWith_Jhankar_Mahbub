import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button
        onClick={signInUsingGoogle}
        className="btn-success py-2 px-3 fw-bolder rounded-3"
      >
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
