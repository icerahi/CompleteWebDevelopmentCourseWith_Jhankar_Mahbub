import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="login-form">
      <div>
        <h2>Create Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="Your Email" />
          <br />
          <input type="password" placeholder="Your Password" /> <br />
          <input type="password" placeholder="Confirm Password" /> <br />
          <input type="submit" value="Create" />
        </form>
        <p>ALready have an account? <Link to="/login">Login</Link> </p>
        <div>-------------or---------------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
