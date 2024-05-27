import React from 'react';
import '../CSS/UserHomePage.css';
import Header from './Header';
import Footer from './Footer';


const categories = [
  { image: '../images/Birthday Cart in blue.webp', title: 'Cards' },
  { image: '../images/Bouquet.jpeg', title: 'Bouquet' },
  { image: '../images/Mug.webp', title: 'Mugs' },
  { image: '../images/Frame.jpg', title: 'Frames' },
  { image: '../images/Ornaments.jpg', title: 'Ornaments' },
  { image: '../images/Fsshion.jpg', title: 'Fashion' },
];

const UserHomePageBirthday = () => {
  return (
    <div className="homepage">
       <Header/>
      <div className="banner">
      <img src='../images/main.png' alt=" " style={{ width: '100%', height: '650px' }}/>
      </div>
      <div className="category-section">
        <h2>Choose Category</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
        
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserHomePageBirthday;