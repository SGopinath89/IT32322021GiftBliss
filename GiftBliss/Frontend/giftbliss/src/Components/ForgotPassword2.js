import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ForgotPassword2.css";

const ForgotPassword2 = () => {
  const navigate = useNavigate();

  const onConfirmButtonShapeClick = useCallback(() => {
    navigate("/forgot-password2");
  }, [navigate]);

  return (
    <div className="forgot-password1">
      <div className="anytime-shop">
        <div className="shop-anytime1">SHOP ANYTIME</div>
      </div>
      <button className="gift-bliss1">GIFT BLISS</button>
      <section className="confirmation-copy">
        <div className="confirmation-copy-inner">
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="your-password-has-been-success-wrapper">
                <div className="your-password-has">
                  Your password has been successfully reset. Click confirm to set a new password
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirmation-copy-child">
          <div className="frame-div">
            <div className="frame-wrapper1">
              <div className="your-password-has-been-success-container">
                <div className="your-password-has1">
                  Your password has been successfully reset. Click confirm to set a new password
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="forgot-password-inner" />
      <section className="confirm-button">
        <div className="confirm-button-shape-parent">
          <div className="confirm-button-shape" onClick={onConfirmButtonShapeClick} />
          <div className="confirm">Confirm</div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword2;
