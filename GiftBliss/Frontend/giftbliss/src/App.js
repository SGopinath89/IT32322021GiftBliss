import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/HomePage.css';
import './CSS/Header.css';
import './CSS/Footer.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import HomePage from './Components/HomePage';
import CategoryPage from './Components/CategoryPage';
import Dashboard from './Components/Dashboard';
import ProductPage from './Components/ProductPage';
import AdminAddProduct from './Components/AdminAddProduct';
import AdminProductPage from './Components/AdminProductPage';
import AdminCustomerPage from './Components/AdminCustomerPage';
import AdminCustomerDetailsPage from './Components/AdminCustomerDetailsPage';
import AdminOrderPage from './Components/AdminOrderPage';
import ContactUs from './Components/ContactUs';
import AdminRefundPage from './Components/AdminRefundPage';
import ForgotPassword from './Components/ForgotPassword';
import ForgotPassword1 from './Components/ForgotPassword1';
import ForgotPassword2 from './Components/ForgotPassword2';
import ForgotPassword3 from './Components/ForgotPassword3';
import ForgotPassword4 from './Components/ForgotPassword4';
import AboutUs from './Components/AboutUs';
import Payment from './Components/Payment';
import PaymentDetails from './Components/PaymentDetails'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:subcategory" element={<CategoryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/:category/:productName" element={<ProductPage />} />
          <Route path="/add_product" element={<AdminAddProduct />} />
          <Route path="/products" element={<AdminProductPage />} />
          <Route path="/customers" element={<AdminCustomerPage />} />
          <Route path="/customers_details" element={<AdminCustomerDetailsPage />} />
          <Route path="/order" element={<AdminOrderPage />} />
          <Route path="/order_details" element={<AdminProductPage />} />
          <Route path="/refund" element={<AdminRefundPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgotPassword1" element={<ForgotPassword1 />} />
          <Route path="/forgotPassword2" element={<ForgotPassword2 />} />
          <Route path="/forgotPassword3" element={<ForgotPassword3 />} />
          <Route path="/forgotPassword4" element={<ForgotPassword4 />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
