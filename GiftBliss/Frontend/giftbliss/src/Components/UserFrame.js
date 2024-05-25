import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UserFrame.css";
import UserHeader from "./UserHeader";
import Footer from './Footer';
import PersonalDetails from "./PersonalDetails";

const UserFrame = () => {
  const navigate = useNavigate();

  const onPersonalDetailsTextClick = useCallback(() => {
    navigate("./PersonalDetails");
  }, [navigate]);

  const onPaymentMethodsTextClick = useCallback(() => {
    navigate("/Payment");
  }, [navigate]);

  const onYourOrdersTextClick = useCallback(() => {
    navigate("/OrderHistory");
  }, [navigate]);

  const onManageAddressTextClick = useCallback(() => {
    navigate("/ManageAddress");
  }, [navigate]);

  return (
    <div className="user-frame">
      <UserHeader />
      <div className="content">
        <div className="details">
          <div className="menu-item" onClick={() => navigateTo("./PersonalDetails")}>Personal Details
           
          </div>
          <div className="menu-item" onClick={() => navigateTo("./Payment")}>Payment Methods</div>
          <div className="menu-item"  onClick={() => navigateTo("./OrderHistory")}>Your Orders</div>
          <div className="menu-item" onClick={() => navigateTo("./ManageAddress")}>Manage Address</div>
          <div className="menu-item">Log Out</div>
          
        </div>
        <div className="image-container">
          <img
            className="personal-data-image"
            alt=""
            src="../images/userframe.svg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserFrame;
