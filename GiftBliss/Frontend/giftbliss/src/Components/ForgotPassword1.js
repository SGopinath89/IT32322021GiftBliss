import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/ForgotPassword1.css';

const ForgotPassword1 = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email') || ''; // Retrieve email from URL params

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/forgetPassword3');
  };

  const handleResendCode = () => {
  };

  return (
    <div className="container">
      <div className="back-arrow">&#8592;</div>

      <form onSubmit={handleSubmit}>

      <h2>Check your email</h2>

        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        
        <p>Code was sent to your email <strong>{email}</strong></p>
        <p>This code expires in 5 minutes</p>
        <button type="submit">verify code</button>
      
          
      <p>Haven’t got the email yet? <span className="resend-link" onClick={handleResendCode}>Resend Code</span></p></form>
    </div>
  );
};

export default ForgotPassword1;
