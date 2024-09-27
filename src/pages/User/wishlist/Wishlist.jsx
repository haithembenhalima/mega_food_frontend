import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { InputText } from "primereact/inputtext";
import { useDispatch,useSelector } from "react-redux";
import { Paginator } from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";
import { useProducts } from "../../../hooks/useProducts";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Product from "../../../components/product/Product";
import NotFound from "../../../components/notfound/NotFound";
import {fetchWishlist} from "../../../redux/wishlist/actions"
function Wishlist() {

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const dispatch = useDispatch();

  const { wishlistData, wishlistLoading, wishlistError } = useSelector(
    (state) => state.wishlist
  );

  const onPageChange = (event) => {
    setPage(event.page + 1);
  };

  
  useEffect(() => {
    dispatch(fetchWishlist(page));
  }, [dispatch, page]);

  if (wishlistLoading ) return <p>Loading...</p>;
  if (wishlistError ) {
    localStorage.clear();
    window.location.href = "/";
  }
    
  return (
    localStorage.getItem('role') === 'user'?
    <div className="product-page container">
      {/* Start Navbar here */}
      <Navbar />
      {/* End Navbar here */}

      <h2> المنتجات المفضلة</h2>

      <div className="products_style">
        { wishlistData.map((item) => {        
          const product = item.Product;
            
          return (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              solde={product.solde}
              image={product.images[0]}
              alt={product.name}
              rating={product.ratingAverage}
              isFavorite= {true}
            />
          );
        }) }
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
