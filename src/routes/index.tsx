import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviePage";
import WishlistPage from "../pages/WishListPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
  </Routes>
);

export default AppRoutes;
