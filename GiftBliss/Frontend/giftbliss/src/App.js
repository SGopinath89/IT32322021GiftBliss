import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CategoryPage from './components/CategoryPage';
import ProductPage from './Components/ProductPage'
import '../CSS/HomePage.css';
import '../CSS/UserHeader.css';
import '../CSS/Footer.css';
import AdminRefundPage from './components/AdminRefundPage';
import UserOrderPage from './components/UserOrderPage';
import Login from './components/Login';
import Signup from './Components/Signup';

import AdminAddProduct from './Components/AdminAddProduct';
import AdminProductPage from './Components/AdminProductPage';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subcategory" element={<CategoryPage />} />
        <Route path="/admin/add_product" element={<AdminAddProduct />} />
        <Route path="/admin/product_page" element={<AdminProductPage />} />
        <Route path="/product/:category/:productName" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;