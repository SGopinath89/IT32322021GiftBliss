import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/HomePage.css';
import './CSS/Header.css';
import './CSS/Footer.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import HomePage from './components/HomePage';
import CategoryPage from './Components/CategoryPage';
import Dashboard from './Components/Dashboard';
import ProductPage from './Components/ProductPage';
import AdminAddProduct from './Components/AdminAddProduct';
import AdminCustomerPage from './Components/AdminCustomerPage';
import AdminCustomerDetailsPage from './Components/AdminCustomerDetailsPage';
import AdminOrderPage from './Components/AdminOrderPage';
import AdminProductPage from './Components/AdminProductPage';
import AdminRefundPage from './Components/AdminRefundPage';
import ForgotPassword from './Components/ForgotPassword';
import ForgotPassword1 from './Components/ForgotPassword1';
import ForgotPassword2 from './Components/ForgotPassword2';
import ForgotPassword3 from './Components/ForgotPassword3';
import ForgotPassword4 from './components/ForgotPassword4';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subcategory" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Add_New_Product" element={<AdminAddProduct />} />
        <Route path="/Customers" element={<AdminCustomerPage />} />
        <Route path="/Customers_Details" element={<AdminCustomerDetailsPage />} />
        <Route path="/Order" element={<AdminOrderPage />} />
        <Route path="/Order_details" element={<AdminProductPage />} />
        <Route path="/Refund" element={<AdminRefundPage />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} />
        <Route path="/ForgotPassword1" element={<ForgotPassword1 />} />
        <Route path="/ForgotPassword2" element={<ForgotPassword2 />} />
        <Route path="/forgotPassword3" element={<ForgotPassword3/>} />
        <Route path="/ForgotPassword4" element={<ForgotPassword4/>} />
      </Routes>
    </div>
  );
}

export default App;
