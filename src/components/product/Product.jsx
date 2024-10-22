import React from "react";
import "./Product.css";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

function Product({
  id,
  name,
  price,
  solde,
  alt,
  image,
  rating,
  isFavorite = false,
  addingToWishlist,
  deletingFromWishlist,
  showDialog,
  getId
}) {

  return (
    <div className="product">
      <div className="product-card">
        <img src={image} alt={alt} className="product-image" />
        <div className="product-info">
          <div className="product-name-rating">
            <h2 className="product-title">{name}</h2>
            {rating > 0 ? (
              <i
                className="pi pi-star-fill p-overlay-badge"
                style={{
                  fontSize: "1.25rem",
                  marginRight: 21,
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                {rating}
              </i>
            ) : null}
          </div>

          <div className="product-price-discount">
            <p className="product-price">{price} د.ج</p>
            {solde > 0 ? (
              <Tag severity="danger" value="تخفيض" className="tag">
                {" "}
                {solde} د.ج
              </Tag>
            ) : null}
          </div>
          <div>
            <Button
              className="product-button"
              label="أضف إلى السلة"
              icon="pi pi-shopping-bag"
              raised
              onClick={() => showDialog(id)}
            />
            {isFavorite ? (
              <Button
                icon="pi pi-heart-fill"
                rounded
                text
                raised
                severity="danger"
                aria-label="Cancel"
                onClick={() => deletingFromWishlist(id)}
              />
            ) : (
              <Button
                icon="pi pi-heart"
                rounded
                text
                raised
                severity="danger"
                aria-label="Cancel"
                onClick={() => addingToWishlist(id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
