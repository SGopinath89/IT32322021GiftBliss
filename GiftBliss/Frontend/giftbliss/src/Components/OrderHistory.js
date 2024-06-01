import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderHistory.css";
import UserHeader from './UserHeader';
import Footer from './Footer'
import NavigationButton from "./NavigationButton";




const OrderHistory = () => {
    const navigate = useNavigate();

    const navigateTo = useCallback((path) => {
      navigate(path);
    }, [navigate]);
  
    return (
      <div className="personal-details">
   
        <UserHeader />
        <div className="heading">Order History</div>
        
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
            <div className="Order">
            
            <div className="container">
            <div className="order-iteam">
            <div className="left">
           
              <div className="image-column">
                <img className="image-icon" alt="Personal data icon" src="../images/main.png" />
              </div>

              </div>
              </div>
              <div className="order-iteam">
              <div className="left">
              <div className="image-column">
                <img className="image-icon" alt="Personal data icon" src="../images/main.png" />
              </div>
              </div>
              </div>
              </div>
              
              
              
              <div className="right">
              <div className="button-column">
              <div className="navigation-buttons">
              
        <NavigationButton text="Track Order" path="/" />
        <NavigationButton text="View Order" path="/" />
        <NavigationButton text="Edit Order" path="/" />
        </div>
              </div>
              </div>

              

            
            
            </div>
            <div className="Order">
            <div className="container">
            <div className="order-iteam">
            <div className="left">
                <div className="image-column">
                <img className="image-icon" alt="Personal data icon" src="../images/main.png" />
                </div>
              </div>
              </div>
              </div>
             <div className="right">
              <div className="button-column">
                
                  
                  <div className="navigation-buttons">
        <NavigationButton text="Track Order" path="/" />
        <NavigationButton text="View Order" path="/" />
        <NavigationButton text="Edit Order" path="/" />
        </div>
                 
                 </div>
                  
              </div>
              
          
</div>

          </div>
        </div>
        
        <Footer />
      </div>
    );
};

export default OrderHistory;
