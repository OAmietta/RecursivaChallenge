import React from "react";
import "./Card.css";

export default function Card({ id, name, img}) {
  return (
    <div className="Card">
      <img src={img} alt="" />
      <h1>{name}</h1>
    </div>
  );
}
