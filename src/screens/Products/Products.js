import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import Slider from "components/Slider/Slider";
import { categories, products } from "constants/data";
import "./Products.css";

export default function Products() {
  let { id } = useParams();
  let history = useHistory();

  return (
    <>
      <Navbar color="orange" />
      <Slider link="/products/" />
      <div className="Products">
        <h4>{categories[id - 1].name}</h4>
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
            <button className="pay">Continuar</button>
          </Link>
          <Link to="/">
            <button className="cancel" onClick={() => history.goBack()}>Volver</button>
          </Link>
        </div>
      </div>
    </>
  );
}
