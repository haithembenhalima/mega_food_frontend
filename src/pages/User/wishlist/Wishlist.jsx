import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";
import { useProducts } from "../../../hooks/useProducts";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Product from "../../../components/product/Product";
import NotFound from "../../../components/notfound/NotFound";

function Wishlist() {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setPage(event.page + 1); // API uses 1-based indexing
  };

  return (
    localStorage.getItem('role') === 'user'?
    <div className="product-page container">
      {/* Start Navbar here */}
      <Navbar />
      {/* End Navbar here */}

      <h2> المنتجات المفضلة</h2>

      <div className="products_style">
        { /*filteredProducts.map((item) => {
          return (
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              solde={item.solde}
              image={item.images[0]}
              alt={item.name}
              rating={item.ratingAverage}
            />
          );
        }) */}
      </div>

      <Paginator
        first={(page - 1) * rows}
        rows={rows}
        totalRecords={120}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />

      {/* Start Footer here */}
      <Footer />
      {/* End Footer here */}
    </div>

    : 
    <div className="container">
    <NotFound />
  </div>
  );
}

export default Wishlist;
