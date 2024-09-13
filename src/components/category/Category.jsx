import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

function Category({ image, name }) {
  return (
    <div className="category">
      <div className="category-card">
        <Link>
          <img src={image} alt={name} className="category-image" />
        </Link>
      </div>
      <h3>{name}</h3>
    </div>
  );
}

export default Category;
