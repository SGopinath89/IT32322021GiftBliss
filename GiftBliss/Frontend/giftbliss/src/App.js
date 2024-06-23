import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CategoryPage from './Components/CategoryPage';
import AdminAddProduct from './Components/AdminAddProduct';
import AdminProductPage from './Components/AdminProductPage'; // Import AdminProductPage
import './CSS/HomePage.css';
import './CSS/UserHeader.css';
import './CSS/Footer.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/add_product" element={<AdminAddProduct />} />
        <Route path="/admin/product_page" element={<AdminProductPage />} /> {/* Add route for AdminProductPage */}
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subcategory" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
