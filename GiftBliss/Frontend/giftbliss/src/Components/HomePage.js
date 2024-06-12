import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomePage.css';
import Footer from './Footer';
import UserHeader from './UserHeader';


const categories = [
  { image: '../images/Categories/books.avif', title: 'Books & Stationery', path: 'books' },
  { image: '../images/Categories/electronics&gadgets.png', title: 'Electronics & Gadgets', path: 'electronics' },
  { image: '../images/Categories/fahion&accessories.avif', title: 'Fashion & Accessories', path: 'fashion' },
  { image: '../images/Categories/health.webp', title: 'Health & Beauty', path: 'health' },
  { image: '../images/Categories/home.jpg', title: 'Home & Living', path: 'home' },
  { image: '../images/Categories/toys.jpg', title: 'Toys & Games', path: 'toys' },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <UserHeader/>
      <div className="banner">
        <img src="../images/main.png" alt="Banner" style={{ width: '100%', height: '650px' }} />
      </div>
      <div className="category-section">
        <h2>Choose Category</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link to={`/${category.path}`} key={index} className="category-card">
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
