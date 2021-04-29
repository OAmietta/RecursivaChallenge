import React from "react";
import "./ProductDetails.css";
import Navbar from "components/Navbar/Navbar";
import { useParams, Link } from "react-router-dom";
import { products } from "constants/data";

export default function ProductDetails() {
  let { id } = useParams();

  return (
    <>
      <Navbar color="green" />
      <div className="ProductDetails">
        <div className="card">
          <div className="img-container">
            <img src={products[id - 1].img} alt="product" />
            <h3 className="h3">{products[id - 1].name} </h3>
          </div>
          <div className="info-container">
            <p className="p"> {products[id - 1].description} </p>
            <h4 className="h4"> {products[id - 1].price} </h4>
          </div>
        </div>

        <div className="buttons">
          <Link to="/payment">
            <button className="pay">Pagar</button>
          </Link>
          <Link to="/">
            <button className="cancel">Cancelar Orden</button>
          </Link>
        </div>
      </div>
    </>
  );
}
