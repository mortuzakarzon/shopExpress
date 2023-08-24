import React from "react"; // Don't forget to import React
import { Routes, Route } from "react-router-dom"; // Import correct components from react-router-dom
import CatgoriesPreview from "../categores-preview/categores-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatgoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;