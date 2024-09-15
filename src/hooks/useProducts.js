// useProducts.js

import { useState, useEffect } from "react";

export const useProducts = (page = 1, rows = 10, filterPrices = null) => {
  const [products, setProducts] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (filterPrices !== null) {
      // Fetch products with pagination
      fetch(`http://localhost:5000/api/v1/products?page=${page}&filter=price=-${filterPrices}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            setProducts(data.data);
          }
        });
    } else {
      // Fetch products with pagination
      fetch(`http://localhost:5000/api/v1/products?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            setProducts(data.data);
          }
        });
    }

    // Fetch categories
    fetch("http://localhost:5000/api/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setCategories(data.data);
        }
      });
  }, [page]);

  return { products, totalRecords, categories };
};
