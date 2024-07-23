import React, { useState, useEffect } from "react";
import axios from "axios";
import "./sortData.css";
const SortData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const url = "https://dummyjson.com/products?limit=100";

  const fetchProducts = async () => {
    const productlist = await axios.get(url);
    setProducts(productlist.data.products);
    setSelectedProducts(productlist.data.products);
    console.log(productlist.data.products);
  };

  const fetchCategories = async () => {
    const productlist = await axios.get(url);
    const productcategories = productlist.data.products.map(
      (item) => item.category
    );
    const individualproductcategories = [...new Set(productcategories)];
    setCategories(individualproductcategories);
    console.log(categories);
  };
  const setCategory = (item) => {
    setSelectedCategory(item);
    if (selectedCategory === "all") {
      setSelectedProducts(products);
    } else {
      setSelectedProducts(
        products.filter((products) => products.category === item)
      );
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="mainClass">
      <h5>Product Filter By category</h5>
      <div className="category">
        <div className="item" onClick={() => setCategory("all")}>
          All
        </div>
        {categories.map((item) => (
          <>
            <div onClick={() => setCategory(item)} key={item} className="item">
              {item}
            </div>
          </>
        ))}
      </div>
      <div className="productsParent">
        {selectedProducts.map((items) => (
          <div className="products">
            <img src={items.thumbnail} />
            <h3>{items.title}</h3>
            <p>{items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SortData;
