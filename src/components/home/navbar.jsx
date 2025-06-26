import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">Logo</div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          <li><Link to="/bookmark">Bookmark</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      </div>

      <button className="login-button">Login</button>
    </div>
  );
};

export default Navbar;
