import React from "react";
import "./Product.css";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

function Product() {
  return (
    <div className="product">
      <div className="product-card">
        <img
          src="/images/annoounce2.jpg"
          alt="{title}"
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">إسم المنتج</h2>
          <div className="product-price-discount">
            <p className="product-price">250 د.ج</p>
            <Tag severity="danger" value="تخفيض 30%"></Tag>
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
