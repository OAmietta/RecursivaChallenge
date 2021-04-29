import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import {categories, products} from "constants/data";
import "./Categories.css";


export default function Categories() {
  
  const [flag, setFlag] = useState(false);
  
  function handleFlag() {
    setFlag(false);
    console.log(flag);
  }

  if (flag) {
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
                products={item.products}
                // onClick={handleFlag()}
              />
            ))}
          </div>
          <div className="buttons">
            <Link to="/products">
              <button className="pay">Pagar</button>
            </Link>
            <Link to="/">
              <button className="cancel">Cancelar Orden</button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
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
                products={item.products}
                // onClick={handleFlag()}
              />
            ))}
          </div>
          <div className="buttons">
            <Link to="/products">
              <button className="pay">Pagar</button>
            </Link>
            <Link to="/">
              <button className="cancel">Cancelar Orden</button>
            </Link>
          </div>
        </div>
      </>
     
    )
  }
}
