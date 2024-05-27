import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationButton.css'; // Import the CSS file for styling

const NavigationButton = ({ text, path, className = "navigation-button" }) => {
  return (
    <Link to={path} className={className}>
      {text}
    </Link>
  );
};

export default NavigationButton;
