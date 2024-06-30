import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./Components/mainPage";
import ProductDetails from "./Components/ProductPage";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <MainMenu />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/product/:productId"
                  element={
                    <ProtectedRoute>
                      <ProductDetails />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
