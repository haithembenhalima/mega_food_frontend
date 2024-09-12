import React from "react";
import "../App.css";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/CarouselComponent";
import Section from "../components/section/Section";
import Category from "../components/category/Category";
import Product from "../components/product/Product";
import Footer from "../components/footer/footer";

function Index() {
  return (
    <div className="container">
      {/* Start Navbar here */}
      <Navbar />
      {/* End Navbar here */}

      {/* Start Carousel announcement here */}
      <Carousel />
      {/* End Carousel announcement here */}

      {/* Displaying all the categories */}
      <Section section_name="الأقسام الأكثر طلبا" section_url="/categories" />
      <div style={categories_style}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>

      {/* */}
    <Section section_name="المنتجات الأكثر مبيعا" section_url="/products"/>
    <div style={products_style}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>

    {/* The footer */}
    <Footer />

    </div>
  );
}

// Styles for categories container
const categories_style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingTop: "20px",
  paddingBottom: "20px",
};

const products_style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: "20px",
    paddingBottom: "20px",
  };
export default Index;
