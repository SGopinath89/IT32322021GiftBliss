import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import UserHomePage from './components/UserHomePage';
//import HomePage from './components/HomePage';
//import Header from './components/Header';
//import Footer from './components/Footer';
//import PersonalDetails from './components/PersonalDetails';
//import HomePage from './components/HomePage';
//import ContactUs from './components/ContactUs';
//import AboutUs from './components/AboutUs';
import UserFrame from './Components/UserFrame';
//import PersonalDetails from './Components/PersonalDetails';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<UserFrame/>} />
      
        
        
      </Routes>
    </Router>
  );
};

export default App;
