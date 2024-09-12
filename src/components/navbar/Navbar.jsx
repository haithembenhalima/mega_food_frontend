import React from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-info">
          <div className="localization">
            <i className="map pi pi-map-marker"></i>
            <p>فرع باب الزوار 1، باب الزوار، العاصمة</p>
          </div>
          <div className="register">
            <a href="#">الدخول</a>
            <span>|</span>
            <a href="#">التسجيل</a>
          </div>
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
              <InputText v-model="value1" placeholder="بحث عن منتج" />
            </IconField>
            <Button label="بحث" />
          </div>

          <div className="shop">
            <Link>
              <i
                className="pi pi-heart p-overlay-badge"
                style={{ fontSize: "2rem", marginLeft: 21 }}
              ></i>
            </Link>
            <Link>
              <i
                className="pi pi-shopping-bag p-overlay-badge"
                style={{ fontSize: "2rem", marginLeft: 21 }}
              >
                <Badge value="0"></Badge>
              </i>
            </Link>
          </div>
        </div>

        <div className="nav-items">
          <div className="items">
            <ul>
              <Link>
                <li>الرئيسية</li>
              </Link>
              <Link>
                <li>المنتجات</li>
              </Link>
              <Link>
                <li className="dropdown">
                  الصفحات
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#page1">المنتجات</a>
                    </li>
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
