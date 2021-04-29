import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "assets/logo.png";
import summerSale from "assets/portada.png";

export default function Home() {
  return (
    <div className="Home">
   
      <img src={logo} alt="" className="logo" />
     
      <div className="portada">
        <img src={summerSale} alt="" className="summerSale" />
        <Link to="/categories">
          <button className="btn">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}
