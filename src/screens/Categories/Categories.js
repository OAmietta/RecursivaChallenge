import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import { categories } from "constants/data";
import "./Categories.css";

export default function Categories() {
  return (
    <>
      <Navbar color="green" />
      <div className="Categories">
        <h4>ELIGE UNA OPCIÓN</h4>
        <div className="content">
          {categories.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              link="/products/"
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
