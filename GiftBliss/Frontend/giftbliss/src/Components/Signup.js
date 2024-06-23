import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Signup.css';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <h3>GIFT BLISS</h3>
        <h3>SHOP ANYTIME</h3>
        <p>Join Our Community!</p>
        <p>
          Sign up today to enjoy exclusive deals, faster checkout, and a personalized shopping experience.
          Your journey to endless discoveries starts here.
        </p>
        <img src="images/signUp.svg" alt="Sign Up Illustration" />
      </div>
      <div className="right-section">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Conform Password" required />
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
