import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import "./Products.css";

export default function Products() {
  return (
    <>
      <Navbar color="orange"/>
      <div className="products">
        <div>products</div>
        <Link to="/payment">
          <button>Pagar</button>
        </Link>
      </div>
    </>
  );
}
