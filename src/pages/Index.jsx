import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/CarouselComponent";
import Section from "../components/section/Section";
import Category from "../components/category/Category";
import Product from "../components/product/Product";
import Footer from "../components/footer/footer";
import { fetchWishlist } from "../redux/wishlist/actions";
import { fetchCategories } from "../redux/category/actions";
import { fetchProducts } from "../redux/product/actions";

function Index() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { categoryData, catgeoryLoading, categoryError } = useSelector(
    (state) => state.category
  );
  const { productData, productLoading, productError } = useSelector(
    (state) => state.product
  );
  const { wishlistData, wishlistLoading, wishlistError } = useSelector(
    (state) => state.wishlist
  );
  useEffect(() => {
    dispatch(fetchCategories(page));
    dispatch(fetchProducts(page));
    dispatch(fetchWishlist(page));
  }, [dispatch, page]);

  if (catgeoryLoading && productLoading) return <p>Loading...</p>;
  if (categoryError || productError) return <p>Error during fetching</p>;

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
        {categoryData.map((item) => {
          return <Category key={item.id} image={item.image} name={item.name} />;
        })}
      </div>

      {/* Display the best selling products */}
      <Section section_name="المنتجات الأكثر مبيعا" section_url="/products" />
      <div style={products_style}>
        {localStorage.getItem("userToken")
          ? productData.map((item) => {
              const isFavorite = wishlistData.some(
                (wishlistItem) => wishlistItem.ProductId === item.id
              );
              return (
                <Product
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  solde={item.solde}
                  image={item.images[0]}
                  alt={item.name}
                  rating={item.ratingAverage}
                  isFavorite={isFavorite}
                />
              );
            })
          : productData.map((item) => {
              const isFavorite = wishlistData.some(
                (wishlistItem) => wishlistItem.id === item.id
              );
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
            })}
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
