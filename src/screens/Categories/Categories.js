import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import "./Categories.css";

/*Images of categories*/
import bebidas from "assets/bebidas.png";
import cafeteria from "assets/cafeteria.png";
import cucurucho from "assets/cucuruchos.png";
import chocolate from "assets/chocolate.png";
import especialidades from "assets/especialidades.png";
import copahelada from "assets/copahelada.png";
import copadulce from "assets/copadulce.png";
import promociones from "assets/promociones.png";

export default function Categories() {
  const data = [
    {
      id: 1,
      name: "BEBIDAS",
      img: bebidas,
      description: "Bebidas de todo tipo",
      price: "$120",
    },
    {
      id: 2,
      name: "CAFETERIA",
      img: cafeteria,
      description: "Cafeteria de todo tipo",
      price: "$100",
    },
    {
      id: 3,
      name: "CUCURUCHO",
      img: cucurucho,
      description: "Cucuruchos de todo tipo",
      price: "$120",
    },
    {
      id: 4,
      name: "CHOCOLATE",
      img: chocolate,
      description: "Chocolates de todo tipo",
      price: "$100",
    },
    {
      id: 5,
      name: "ESPECIALIDADES",
      img: especialidades,
      description: "Bebidas de todo tipo",
      price: "$120",
    },
    {
      id: 6,
      name: "COPA HELADA",
      img: copahelada,
      description: "Cafeteria de todo tipo",
      price: "$100",
    },
    {
      id: 7,
      name: "COPA DULCE",
      img: copadulce,
      description: "Cucuruchos de todo tipo",
      price: "$120",
    },
    {
      id: 8,
      name: "PROMOCIONES",
      img: promociones,
      description: "Chocolates de todo tipo",
      price: "$100",
    },
  ];

  return (
    <>
      <Navbar color="green" />
      <div className="Categories">
        <h4>ELIGE UNA OPCIÓN</h4>
        <div className="content">
          {data.map((item) => (
            <Card key={item.id} id={item.id} name={item.name} img={item.img} />
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
}
