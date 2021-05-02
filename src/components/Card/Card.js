import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, name, img, link}) {
  let newTo = {
    pathname: link + name + "/" + id,
    id: id,
  };

  return (
    <Link to={newTo} className="Card">
      <img src={img} alt="" />
      <h1>{name}</h1>
    </Link>
  );
}
