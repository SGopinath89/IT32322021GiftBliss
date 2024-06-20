import React from "react";
import { useState,useCallback, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "../CSS/Payment.css";
import UserHeader from "./UserHeader";
import { FaUser } from "react-icons/fa6";
// import { Icon } from "@iconify/react/dist/offline.js";
// import simCardChip from '@iconify/icons-flat-color-icons/sim-card-chip';
// import mastercardIcon from '@iconify/icons-simple-icons/mastercard';
// import visaIcon from '@iconify/icons-simple-icons/visa';
import { FaBars, FaCcMastercard } from "react-icons/fa";
import { TbBrandVisa } from "react-icons/tb";
import { FcSimCardChip } from "react-icons/fc";
import { RiBankCard2Line } from "react-icons/ri";
// import Footer from "./Footer";



const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const [paymentMethods, setPaymentMethods]= useState([
    {cardNumber: "**** **** **** 1234", expiry: "12/24", type: "visa", accountNumber: "1234567890", name: "Sajath MH" },
    { bank: "", cardNumber: "**** **** **** 5678", expiry: "11/25", type: "mastercard", accountNumber: "0987654321", name: "Sajath MH" }
  ]);

  const addPaymentMethod = (newMethod) => {
    setPaymentMethods([...paymentMethods, newMethod]);
  };

  const removeCard = (index) => {
    setPaymentMethods(paymentMethods.filter((_, i) => i !== index));
  };

  
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

//   const removeCard = (index) => {
//     console.log(`Remove card at index: ${index}`);
//   };

  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expiry = `${expiryMonth}/${expiryYear}`;
    const newPaymentMethod = { cardNumber, expiry, cvv, name };
    addPaymentMethod(newPaymentMethod);
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvv("");
    setName("");
  };

  return (
    
    <div className="payment-details">

        <UserHeader/>
        

        <div className="content-wrapper">
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars size={30}/>
            </div>
            <div className={`left-side ${menuOpen ? "open" : ""}`}>
                <div className="actions">
                    <div className={`action-item ${currentPage === "/personalDetails" ? "active" : ""}`} onClick={() => navigateTo("/personalDetails")}>
                        Personal Details
                    </div>
                    <div className={`action-item ${currentPage === "/payment" ? "active" : ""}`} onClick={() => navigateTo("/payment")}>
                        Payment Methods
                    </div>

                    <div className={`action-item ${currentPage === "/order-history" ? "active" : ""}`} onClick={() => navigateTo("/order-history")}>
                        Your Orders
                    </div>
                    <div className={`action-item ${currentPage === "/manage-address" ? "active" : ""}`} onClick={() => navigateTo("/manage-address")}>
                        Manage Address
                    </div>
                    <div className="action-item" onClick={() => navigateTo("/logout")}>Log Out</div>
                </div>
            </div>
            <div className="right-side">
                <div className="payment-info">
                    {/* <img className="info-icon" alt="Personal data icon" src="../images/main.png" /> */}
                    <div className="fauser"><FaUser size={130}/></div>
                    <div className="user-name">Sajath Muhamath</div>
                    <div className="payment-information">
                        {paymentMethods.map((method, index) => (
                            <div key={index} className="payment-card">
                                <div className="card-header">
                                    <div className="bank-name"><p>Bank</p></div>
                                    <div className="card-type">
                                        {method.type === "visa" && <TbBrandVisa size={40}/>}
                                        {method.type === "mastercard" && <div className="masterCard" ><FaCcMastercard size={40} /></div>}
                                    </div>
                                </div>
                                <div className="chip-icon">
                                    {/* <Icon icon={simCardChip} width={40} /> */}
                                    <FcSimCardChip size={40}/>
                                </div>
                                <div className="card-details">
                                    <p>{method.cardNumber}</p>
                                    <p>{method.name}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeCard(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="add-payment-method">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="cardNumber"
                                    placeholder="Card Number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group-inline">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="MM"
                                        id="expiryMonth"
                                        value={expiryMonth}
                                        onChange={(e) => setExpiryMonth(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="YYYY"
                                        id="expiryYear"
                                        value={expiryYear}
                                        onChange={(e) => setExpiryYear(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group input-with-icon">
                                    <div className="icon">
                                        <RiBankCard2Line/>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        id="cvv"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Name in Card"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Add Card</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* <Footer/> */}

    </div>
  );
};

export default Payment;
