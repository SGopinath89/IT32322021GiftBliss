import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderTracking.css";
import NavigationButton from "./NavigationButton";
import UserHeader from "./UserHeader";
import Footer from "./Footer";




const OrderTracking = () => {
  const navigate = useNavigate();

  const navigateToDetails = useCallback(() => {
    navigate("/order-tracking-details");
  }, [navigate]);

  return (
    <div className="order-tracking">
      <UserHeader />
      <div className="main-content">
        <h1 className="title">Order Tracking</h1>

        <div className="order-detils">
          <div className="order-item">
            <div className="details-column">
              <div className="left">
                <p className="item-name">Teddy Beer</p>
                <p className="item-ref">Ref.No:20240314</p>
                <div className="price">$02.25</div>
              </div>
              <div className="right">
                <div className="image-column">
                  <img className="image-icon" alt="Teddy Bear" src="../images/main.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-status">
          <div className="container">
            <div className="status-step">
            <div className="left">
            <div className="sp">
            <dev className="left">
            
                  <img className="icon" alt="delivery" src="../images/delivery.svg" />
                </dev>
                <div className="right">
                <div className="place">
              <p>In Process-recipient city</p>
              <p>vavuniya</p></div>
              </div>
              </div>
              </div>
              <div className="right">
              <p className="time">11.45 A.M</p>
              </div>
            </div></div>
            <div className="container">
            <div className="status-step">
            <div className="left">
            <div className="sp"> 
            <dev className="left">
            <div className="vertical-line"></div>
                  <img className="icon" alt="delivery" src="../images/delivery.svg" />
               
                </dev>
                <div className="right">
                <div className="place">
              <p>Transite-Sending city</p>
              <p>Polonaruwe</p></div>
              </div>
              </div>
              </div>
              <div className="right">
              <p className="time">12.30 P.M</p></div>
            </div></div>
            <div className="container">
            <div className="status-step">
            <div className="left">
            <div className="sp">
            <dev className="left">
            <div className="vertical-line"></div>
                  <img className="icon" alt="delivery" src="../images/delivery.svg" />
               
                </dev>
                <div className="right">
                <div className="place">
              <p>Send from shop</p>
              <p>Colombo</p></div>
              </div>
              
              </div>
              </div>
              <div className="right">
              <p className="time">09.00 A.M</p></div>
            </div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderTracking;

