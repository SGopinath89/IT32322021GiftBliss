
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/login');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/user/signup', {
        fullname: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      
      if (response.data.status === 'success') {
        navigate('/Login');
        // Clear form after successful submission
        setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error occurred. Please try again.');
      console.error('Signup failed:', error); // Log the detailed error for debugging
    }
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
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange}  required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}required />
          <input type="password" name="confirmPassword" placeholder="Conform Password" value={formData.confirmPassword} onChange={handleChange} required />
          {error && <p className="error">{error}</p>}
          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <a href="/Login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
