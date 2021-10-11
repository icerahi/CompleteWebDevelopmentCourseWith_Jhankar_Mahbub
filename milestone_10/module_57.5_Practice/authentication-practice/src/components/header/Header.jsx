import React from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div className="header">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink to="/checkout"> Checkout </NavLink>
      {user ? (
        <button onClick={logOut}> {user.displayName}(logout) </button>
      ) : (
        <NavLink to="/login"> Login </NavLink>
      )}
    </div>
  );
};

export default Header;
