import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import NotFound from "../../../components/notfound/NotFound";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { fetchCart } from "../../../redux/cart/actions";

function Cart() {
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  

  const { cartData, cartLoading, cartError } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (cartLoading) return <p>Loading...</p>;
  if (cartError) {
    localStorage.clear();
    window.location.href = "/";
  }
  if (!cartData || !cartData.Cart) {
    return <p>لا يوجد منتجات لديك في السلة</p>;
  }
  console.log(cartData);

  return localStorage.getItem("role") === "user" ? (
    <div className="container">
      {/* Start Navbar here */}
      <Navbar />
      {/* End Navbar here */}

      <div className="cart-container">
        <h2>سلّة المشتريات</h2>
        <div className="cart-items">
          {cartData || cartData.Cart? cartData.CartItem.map((item) => {

            return (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.Product.name}</h3>

                  <p>السعر: {item.Product.price} د.ج</p>
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
                  />
                </div>
              </div>
            );
          }): <h2>لا يوجد منتجات لديك في السلة</h2>}
          
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
          <Tag severity="success" className="tag">
            {cartData.Cart.totalCartPrice} د.ج
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
