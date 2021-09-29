import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = { fontWeight: "bold", color: "red" };
  return (
    <nav>
      <NavLink exact to="/" activeStyle={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/friends" activeStyle={linkStyle}>
        Friends
      </NavLink>
      <NavLink exact to="/about" activeStyle={linkStyle}>
        About
      </NavLink>      
      <NavLink exact to="/about/culture" activeStyle={linkStyle}>
        Culture
      </NavLink>
    </nav>
  );
};

export default Header;
