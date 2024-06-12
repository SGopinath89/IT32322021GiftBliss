import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CategoryPage from './Components/CategoryPage';
import './CSS/HomePage.css';
import './CSS/UserHeader.css';
import './CSS/Footer.css';
import AdminAddProduct from './Components/AdminAddProduct';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AdminAddProduct />} />
       {/*<Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subcategory" element={<CategoryPage />} />*/} 
      </Routes>
    </Router>
  );
};

export default App;
