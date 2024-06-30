// src/components/Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../Store/Slice";

const Header = () => {
  const dispatch = useDispatch();

  const clearUsers = () => {
    dispatch(clearUser());
  };

  return (
    <div className="header-main">
      <div>
        <Link to="/">
          <h2 className="header-title">E Commerce App</h2>
        </Link>
      </div>
      <div className="buttons-div">
        <Link to="/cart">
          <button className="header-cart">Cart</button>
        </Link>
        <Link to="/login">
          <button className="header-logout" onClick={clearUsers}>
            LogOut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
