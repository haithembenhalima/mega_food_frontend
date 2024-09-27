import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { useSelector, useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";
import { useProducts } from "../../../hooks/useProducts";
import { fetchWishlist } from "../../../redux/wishlist/actions";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Product from "../../../components/product/Product";

const ProductPage = () => {
  const [layout, setLayout] = useState("grid");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [filterPrices, setFilterPrices] = useState(null);

  const prices = [
    {
      label: "أقل من 1200 دج",
      value: 1000,
    },
    {
      label: "أقل من 1000 دج",
      value: 1000,
    },
    {
      label: "أقل من 800 دج",
      value: 800,
    },
    {
      label: "أقل من 500 دج",
      value: 500,
    },
    {
      label: "أقل من 250 دج",
      value: 250,
    },
  ];
  const { products, totalRecords, categories } = useProducts(
    page,
    rows,
    filterPrices
  );

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
    .filter(
      (product) => !selectedCategory || product.CategoryId === selectedCategory
    )
    .filter((product) => !filterPrices || product.price < filterPrices);

  const { wishlistData, wishlistLoading, wishlistError } = useSelector(
    (state) => state.wishlist
  );

  const onPageChange = (event) => {
    setPage(event.page + 1); // API uses 1-based indexing
  };

  const onRowsPerPageChange = (event) => {
    setRows(event.rows);
    setPage(1); // Reset to page 1 when changing rows per page
  };

  useEffect(() => {
    dispatch(fetchWishlist(page));
  }, [dispatch, page]);

  return (
    <div className="product-page container">
      {/* Start Navbar here */}
      <Navbar />
      {/* End Navbar here */}

      <h2>قائمة المنتجات</h2>

      <div className="filters p-d-flex p-ai-center p-jc-between p-mb-4">
        <InputText
          placeholder="بحث عن منتج..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-mr-2"
        />
        <Dropdown
          options={categories.map((cat) => ({
            label: cat.name,
            value: cat.id,
          }))}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.value)}
          placeholder="اختر القسم"
          className="p-mr-2"
        />

        <Dropdown
          options={prices.map((price) => ({
            label: price.label,
            value: price.value,
          }))}
          value={filterPrices}
          onChange={(e) => setFilterPrices(e.value)}
          placeholder="السعر"
          className="p-mr-2"
        />
      </div>

      <div className="products_style">
        {localStorage.getItem("userToken")
          ? filteredProducts.map((item) => {
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
                  isFavorite={isFavorite} 
                />
              );
            })
          : filteredProducts.map((item) => {
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
  );
};

export default ProductPage;
