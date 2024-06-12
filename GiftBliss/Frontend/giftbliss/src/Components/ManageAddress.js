import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ManageAddress.css";
import Footer from "./Footer";
import UserHeader from "./UserHeader";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const navigateTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <div className="Address-details">
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
            <div className="Address">
              <p>Address:</p>
              <p>Boys Hostel, university of vavuniya</p>
            </div>
           
          </div>
          <div className="button">
              <button onClick={() => console.log("Add clicked")}>Add</button>
              <button onClick={() => console.log("Delete clicked")}>Delete</button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalDetails;
