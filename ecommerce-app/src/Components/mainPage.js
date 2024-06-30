import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/Slice";
import "./mainPage.css";
import Header from "./Header";

const MainMenu = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setProducts(response.data.products);
        console.log(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const searchProducts = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Header />

      <div className="search">
        <div className="search-box">
          <input
            className="search-input"
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={searchProducts}>
            Search
          </button>
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                className="product-images"
                alt={product.title}
              />
            </Link>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.discountPercentage}</p>
            <button className="add-to-cart" onClick={() => addProduct(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
