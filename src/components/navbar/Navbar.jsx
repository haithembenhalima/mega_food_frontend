import React, {useEffect, useState} from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/actions";


function Navbar() {
  const destroyStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const dispatch = useDispatch();
  const { cartData, cartLoading, cartError } = useSelector(
    (state) => state.cart
  );

  
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (localStorage.getItem('role')==="user" && (!cartData || !cartData.Cart)) {
    return <p>لا يوجد منتجات لديك في السلة</p>;
  }
  console.log(cartData);
  
  return (
    <>
      <nav>
        <div className="nav-info">
          <div className="localization">
            <i className="map pi pi-map-marker"></i>
            <p>فرع باب الزوار 1، باب الزوار، العاصمة</p>
          </div>
          {localStorage.getItem("userId") ? (
            <div className="register">
              <Link style={{textDecoration: 'none'}}><i className="pi pi-user"></i> {localStorage.getItem("userName")}</Link>
              <Link style={{textDecoration: 'none'}} onClick={destroyStorage}><i className="pi pi-sign-out"></i>الخروج </Link>
            </div>
          ) : (
            <div className="register">
              <Link to="/login">الدخول</Link>
              <span>|</span>
              <Link to="/signup">التسجيل</Link>
            </div>
          )}
        </div>

        <hr />

        <div className="nav-logo-search">
          <div className="logo">
            <h2>
              مــيـ<span style={{ color: "#ffc107" }}>ڤافــــــــ</span>ــــوود
            </h2>
          </div>

          <div className="search">
            <IconField iconPosition="right">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText v-model="value1" placeholder="بحث..." />
            </IconField>
            <Button label="بحث" />
          </div>

          <div className="shop">
            <Link to={localStorage.getItem('role')==="user"? "/wishlist": "/login"}>
              <i
                className="pi pi-heart p-overlay-badge"
                style={{ fontSize: "2rem", marginLeft: 21 }}
              ></i>
            </Link>
            <Link to={localStorage.getItem('role')==="user"? "/cart": "/login"}>
              <i
                className="pi pi-shopping-bag p-overlay-badge"
                style={{ fontSize: "2rem", marginLeft: 21 }}
              >
                <Badge value={localStorage.getItem('role')==="user"? cartData.CartItem.length : ""}></Badge>
              </i>
            </Link>
          </div>
        </div>

        <div className="nav-items">
          <div className="items">
            <ul>
              <Link to="/">
                <li>الرئيسية</li>
              </Link>
              <Link to="/products">
                <li>المنتجات</li>
              </Link>
              <Link>
                <li className="dropdown">
                  الصفحات
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#page2">المفضلة</a>
                    </li>
                    <li>
                      <a href="#page3">الطلبات</a>
                    </li>
                  </ul>
                </li>
              </Link>
              <Link>
                <li>تواصل معنا</li>
              </Link>
              <Link>
                <li>معلومات عنا</li>
              </Link>
            </ul>
          </div>

          <div className="phone">
            <i
              className="map pi pi-phone"
              style={{ fontSize: "1.5rem", marginLeft: 10 }}
            ></i>
            <span>026-77-32-66-01</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
