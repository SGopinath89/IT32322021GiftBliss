import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/PersonalDetails.css";
import Footer from "./Footer";
import Header from "./Header";
import UserHeader from "./UserHeader";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const navigateTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <div className="personal-details">
 
      <UserHeader />
      
      <div className="content-wrapper">
        <div className="left-side">
          <div className="actions">
          
            <div className="action-item" onClick={() => navigateTo("")}>Personal Details</div>
            <div className="action-item" onClick={() => navigateTo("/payment")}>Payment Methods</div>
            <div className="action-item" onClick={() => navigateTo("/order-history")}>Your Orders</div>
            <div className="action-item" onClick={() => navigateTo("/manage-address")}>Manage Address</div>
            <div className="action-item">Log Out</div>
          </div>
        </div>
        <div className="right-side">
          
          <div className="personal-info">
          <img className="info-icon" alt="Personal data icon" src="../images/main.png" />
            <div className="user-name">Sajath Muhamath</div>
            <p>Email: sajath@gmail.com</p>
            <p>Contact number: 0765692018</p>
            <p>Address: Boys Hostel, University of Vavuniya</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PersonalDetails;
