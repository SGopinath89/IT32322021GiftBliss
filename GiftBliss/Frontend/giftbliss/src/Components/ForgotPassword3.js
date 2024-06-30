import React, { useCallback } from "react";
import "../CSS/ForgotPassword3.css";

const ForgotPassword3 = () => {
  const onArrowClick = useCallback(() => {
    // Please sync "Forgot Password" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Forgot Password" to the project
  }, []);

  return (
    <div className="forgot-password">
      <div className="forgot-password-inner">
        <div className="frame-parent">
          <div className="gift-bliss-wrapper">
          <button className="gift-bliss">GIFT BLISS</button>
          </div>
          <div className="frame-wrapper">
            <div className="shop-anytime-wrapper">
              <div className="shop-anytime">SHOP ANYTIME</div>
            </div>
          </div>
        </div>
      </div>
      <section className="forgot-password-child">
        <div className="vector-parent">
          <img
            className="frame-child"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
            onClick={onArrowClick}
          />
          <div className="frame-container">
            <div className="set-a-new-password-parent">
              <div className="set-a-new">Set a new password</div>
              <div className="create-a-new-password-ensure-wrapper">
                <div className="create-a-new">
                  Create a new password. Ensure it differs from previous ones
                  for security
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="forgot-password-item" />
      <section className="frame-section">
        <div className="frame-group">
          <div className="frame-div">
            <div className="frame-wrapper1">
              <div className="password-parent">
                <b className="password">Password</b>
                <div className="password-group">
                  <b className="password1">Password</b>
                  <b className="password2">Password</b>
                </div>
              </div>
            </div>
            <div className="frame-item" />
          </div>
          <div className="frame-parent1">
            <div className="frame-wrapper2">
              <div className="frame-parent2">
                <div className="frame-wrapper3">
                  <div className="frame-inner" />
                </div>
                <b className="confirm-password">Confirm Password</b>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="rectangle-div" />
              <div className="frame-child1" />
            </div>
          </div>
        </div>
      </section>
      <section className="forgot-password-inner1">
        <div className="rectangle-group">
          <div className="frame-child2" onClick={onRectangleClick} />
          <div className="update-password">Update Password</div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword3;
