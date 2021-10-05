import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navLinkStye = {
    padding: "10px 15px",
    borderRadius: "15px",
  };
  return (
    <header className="sticky-top bg-white">
      <nav className="container d-flex my-2 justify-content-between align-items-center">
        <Link to="/" className="h2 text-dark text-decoration-none">
          Game<span className="bg-warning p-1 rounded-3">School</span>
        </Link>
        <div className="d-flex gap-4">
          <NavLink
            exact
            style={navLinkStye}
            className="fw-bolder text-decoration-none text-dark"
            activeStyle={{ backgroundColor: "whitesmoke" }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={navLinkStye}
            className="fw-bolder text-decoration-none text-dark"
            activeStyle={{ backgroundColor: "whitesmoke" }}
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            style={navLinkStye}
            className="fw-bolder text-decoration-none text-dark"
            activeStyle={{ backgroundColor: "whitesmoke" }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={navLinkStye}
            className="fw-bolder text-decoration-none text-dark"
            activeStyle={{ backgroundColor: "whitesmoke" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
