import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";

export default function Navbar({ color }) {
  return (
    <div className={`${color}`}>
      <Link to="/">
        <img src={logo} alt="" className="navbar-logo" />
      </Link>
    </div>
  );
}
