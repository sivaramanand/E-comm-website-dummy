import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./ProductPage.css";
import userIcon from "../Images/userIcon.png";
import { addToCart } from "../Store/Slice";
import Header from "./Header";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      <div className="product-details">
        <div className="image-container">
          <img
            src={product.images[0]}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p>
            Price: <del>${product.price}</del>
          </p>
          <p>
            Discounted Price: $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <p>{product.shippingInformation}</p>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-title">
        <h2>Reviews</h2>
      </div>
      <div className="product-reviews">
        {product.reviews.slice(0, 4).map((review, index) => (
          <div key={index} className="indi-product-review">
            <div className="review-person-info">
              <img
                src={userIcon}
                style={{ width: "50px", height: "50px" }}
                className="userID"
                alt="user icon"
              />
              <p className="review-name">{review.reviewerName}</p>
              <div className="review-email-div">
                <p className="review-email">{review.reviewerEmail}</p>
              </div>
            </div>
            <div className="review-comment">
              <p className="review-comment-text">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
