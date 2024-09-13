import React from "react";
import "./Product.css";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

function Product({name, price, solde, alt, image}) {
  return (
    <div className="product">
      <div className="product-card">
        <img
          src={image}
          alt={alt}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{name}</h2>
          <div className="product-price-discount">
            <p className="product-price">{price} د.ج</p>
            {solde > 0 ? <Tag severity="danger" value="تخفيض" className="tag"> {solde} د.ج</Tag>: null}
          </div>
          <div>
            <Button className="product-button" label="أضف إلى السلة" icon="pi pi-shopping-bag" raised />
            <Button
              icon="pi pi-heart"
              rounded
              text
              raised
              severity="danger"
              aria-label="Cancel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
