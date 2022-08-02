import React from "react";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Home from "./Components/ProductsHomePage/Home";
import Footer from "./Components/Layout/Footer";
import Error404 from "./Components/Error404/Error404";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./context/CartProvider";
import ProductDetail from "./Components/Products/ProductDetail";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
