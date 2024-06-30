import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CategoryPage from './Components/CategoryPage';
import ProductPage from './Components/ProductPage';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import ForgotPassword1 from './Components/ForgotPassword1';
import ForgotPassword2 from './Components/ForgotPassword2';
import ForgotPassword3 from './Components/ForgotPassword3';
import ForgotPassword4 from './Components/ForgotPassword4';
import Signup from './Components/Signup';
import AdminAddProduct from './Components/AdminAddProduct';
import AdminProductPage from './Components/AdminProductPage';


import './CSS/HomePage.css';
import './CSS/UserHeader.css';
import './CSS/Footer.css';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpassword1" element={<ForgotPassword1 />} />
          <Route path="/forgotpassword2" element={<ForgotPassword2 />} />
          <Route path="/forgotpassword3" element={<ForgotPassword3 />} />
          <Route path="/forgotpassword4" element={<ForgotPassword4 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:subcategory" element={<CategoryPage />} />
          <Route path="/admin/add_product" element={<AdminAddProduct />} />
          <Route path="/admin/product_page" element={<AdminProductPage />} />
          <Route path="/product/:category/:productName" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
