import React, { useState } from "react";
import "./Cart.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import NotFound from "../../../components/notfound/NotFound";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 19.99, quantity: 2 },
    { id: 3, name: "Product 3", price: 39.99, quantity: 1 },
  ]);
  const [coupon, setCoupon] = useState("");

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = coupon === "DISCOUNT10" ? 0.1 * totalAmount : 0;
  const finalAmount = totalAmount - discount;

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return localStorage.getItem("role") === "user" ? (
    <div className="container">
      {/* Start Navbar here */}
      <Navbar />
      {/* End Navbar here */}

      <div className="cart-container">
        <h2>سلّة المشتريات</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h3>اسم المنتج</h3>

                <p>السعر: {item.price.toFixed(2)} د.ج</p>
                <p>الكمية: {item.quantity}</p>
              </div>
              <div className="item-total">
                <Button
                  icon="pi pi-trash"
                  rounded
                  text
                  raised
                  severity="danger"
                  aria-label="Cancel"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="coupon-section">
          <InputText
            className="coupon-input"
            v-model="value1"
            placeholder="أدخل كوبونك"
          />
          <Button label="تفعيل الكوبون" />
        </div>
        <div className="cart-summary">
          <h3>المبلغ الإجمالي:</h3>
          <Tag severity="success"  className="tag">
            1200 د.ج
          </Tag>
        
          <Button
            className="checkout-button"
            label="تأكيد الطلب"
            size="large"
          />
        </div>
      </div>

      <Footer />
      {/* End Footer here */}
    </div>
  ) : (
    <div className="container">
      <NotFound />
    </div>
  );
}

export default Cart;
