import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/ForgotPassword4.css'; // Import the CSS file

const ForgotPassword4 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login'); // Adjust the path to your sign-in page
  };

  return (
    <div className="password-changed">
      <div className="status">
        <div className="checkmark">
          <span>&#10003;</span> {/* Checkmark symbol */}
        </div>
        <h2>Successful</h2>
        <p>Your password has been changed! Click continue to login.</p>
      </div>
      <button onClick={handleContinue} className="continue-button">
        Continue
      </button>
    </div>
  );
};

export default ForgotPassword4;
