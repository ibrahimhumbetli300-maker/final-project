import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BestSellers from "../pages/BestSellers";
import Kits from "../pages/Kits";
import Training from "../pages/Training";
import Apparel from "../pages/Apparel";
import Memorabilia from "../pages/Memorabilia";
import Gifts from "../pages/Gifts";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import Basket from "../pages/Basket";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails"; 
import Search from "../pages/Search";
import Filter from "../pages/Filter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/training" element={<Training />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/memorabilia" element={<Memorabilia />} />
        <Route path="/gifts" element={<Gifts />} />
        
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />

        
        <Route path="/product/:category/:id" element={<ProductDetails />} />

        <Route path="/search" element={<Search />} />
        <Route path="/filter" element={<Filter />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;