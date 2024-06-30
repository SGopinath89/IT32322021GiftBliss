import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ForgotPassword.css"; 

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  return (
    <div className="forgotPassword">
      <header className="header">
        {/* Add href="/" to make the anchor tag keyboard accessible */}
        <a href="/" className="giftBliss" onClick={onLogoClick}>GIFT BLISS</a>
        <div className="shopAnytime">SHOP ANYTIME</div>
        {/* Add href="/" to make the anchor tag keyboard accessible */}
        <a href="/" className="home">HOME</a>
      </header>
      <main className="main">
        <h1>Forgot Password?</h1>
        <p>Please enter your email to reset the password</p>
        <label className="emailLabel">
          <b>Your Email</b>
          <input type="email" placeholder="Enter your email" className="emailInput"/>
        </label>
        <button className="resetPassword" onClick={onLogoClick}>Reset Password</button>
      </main>
    </div>
  );
};

export default ForgotPassword;
