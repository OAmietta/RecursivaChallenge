import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "assets/logo.png";

export default function Home() {
  return (
    <>
      <img src={logo} alt="" className="logo" />
      <div className="Home">
        <Link to="/categories">
          <button className="btn">SHOP NOW</button>
        </Link>
      </div>
    </>
  );
}
