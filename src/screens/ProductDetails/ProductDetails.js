import React from "react";
import "./ProductDetails.css";
import Navbar from "components/Navbar/Navbar";
import { useParams, Link, useHistory } from "react-router-dom";
import { products } from "constants/data";

export default function ProductDetails() {
  let { id } = useParams();
  let history = useHistory();

  return (
    <>
      <Navbar color="green" />
      <div className="ProductDetails">
        <div className="card">
          <div className="top-card">
            <div className="img-container">
              <img src={products[id - 1].img} alt="product" />
            </div>
            <div className="name-container">
              <h3 className="h3">{products[id - 1].name} </h3>
            </div>
          </div>
          <div className="bottom-card">
            <div className="info-container">
              <div className="description-container">
                <p> {products[id - 1].description} </p>
              </div>
              <div className="buy-container">
                <h4 className="h4"> {products[id - 1].price} </h4>
                <Link to="/payment">
                  <button className="buy hover">Comprar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link to="/">
          <button className="cancel hover" onClick={() => history.goBack()}>
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}
