import React from "react";
import "./Slider.css";
// import { Link } from "react-router-dom";
// import { categories } from "constants/data";

export default function Slider({ link }) {
  return (
    <div className="Slider">
      {/* {categories.map((item) => (
        <Link to={`${link}${item.name}/${item.id}`} key={item.id}>
          <div className={`slider-item`}>
            <img src={item.img} alt="product" />
          </div>
        </Link>
      ))} */}
    </div>
  );
}
