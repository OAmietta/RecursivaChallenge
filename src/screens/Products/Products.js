import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import { products } from "constants/data";
import "./Products.css";

export default function Products() {
  return (
    <>
        <Navbar color="orange" />
        <div className="Categories">
          <h4>ELIGE UNA OPCIÓN</h4>
          <div className="content">
            {products.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                link="/product-details/"
              />
            ))}
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
