import React, { useState, useCallback } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import UserHeader from './UserHeader';
import Footer from "./Footer";
import "../CSS/UserOrderPage.css";

const UserOrderPage = () => {
  const initialDetailsData = [
    { orderId: "ORD001", customerId: "CUST001", customerName: "John Doe", price: "$1000", date: "2023-05-01", status: "Ordered" },
    { orderId: "ORD002", customerId: "CUST002", customerName: "Jane Smith", price: "$200", date: "2023-05-02", status: "Shipped" },
    { orderId: "ORD003", customerId: "CUST003", customerName: "Bob Johnson", price: "$300", date: "2023-05-03", status: "Delivered" },
    // Add more orders with different statuses as needed
  ];

  const [detailsData, setDetailsData] = useState(initialDetailsData);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [trackingStatus, setTrackingStatus] = useState(null); // State for tracking status
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const onNavigate = useCallback((path) => () => {
    navigate(path);
  }, [navigate]);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => prevPage + direction);
  };

  const getCurrentTableData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return detailsData.slice(indexOfFirstItem, indexOfLastItem);
  };

  const getTotalItems = () => detailsData.length;

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(getTotalItems() / itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
      <button key={number} onClick={() => setCurrentPage(number)} className={number === currentPage ? "active" : ""}>
        {number}
      </button>
    ));
  };

  const handleEditClick = (orderId) => {
    navigate(`/edit/${orderId}`);
  };

  const handleDeleteClick = (orderId) => {
    setDetailsData(detailsData.filter(item => item.orderId !== orderId));
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setTrackingStatus(order.status); // Update tracking status on row click
  };

  const subTotal = selectedOrder ? parseFloat(selectedOrder.price.replace('$', '')) : 0;
  const shippingCharge = 10; // Example static shipping charge
  const total = subTotal + shippingCharge;

  const trackingStages = [
    { name: 'Ordered', description: 'Order has been placed.' },
    { name: 'Shipped', description: 'Order has been shipped.' },
    { name: 'Delivered', description: 'Order has been delivered.' }
  ];

  const getStageClass = (stageName) => {
    const stages = ['Ordered', 'Shipped', 'Delivered'];
    const currentStageIndex = stages.indexOf(trackingStatus);
    const stageIndex = stages.indexOf(stageName);
    return stageIndex <= currentStageIndex ? 'active' : '';
  };

  return (
    <div className="CDetails-container">
      <UserHeader />
      <div className="content-wrapper">
        <nav className="sidebar">
          {["Dashboard", "Products", "Add_New_Product", "Customers", "Customer Details", "Order", "Order Details", "Refund"].map((menuItem, index) => (
            <div className="menu-item" key={index} onClick={onNavigate(`/${menuItem.replace(/\s+/g, '_')}`)}>{menuItem}</div>
          ))}
        </nav>
        <div className="abc">
          <div className="Heading">
            <h1>Order Id : {selectedOrder ? selectedOrder.orderId : " Order Id"}</h1>
            <p className="page-title">Gift Bliss/ <span className="select">Refund</span></p>
          </div>
          <div className="main-content">
            <div className="right-content">
              <div className="column-container">
                <div className="order-tracking">
                  {trackingStages.map((stage, index) => (
                    <React.Fragment key={index}>
                      <div className={`order-stage ${getStageClass(stage.name)}`}>
                        {stage.name}
                      </div>
                      {index < trackingStages.length - 1 && <div className={`order-stage-line ${getStageClass(trackingStages[index + 1].name)}`}></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="Table">
                <div className="customer-info">
                  <FaUserCircle className="icon" style={{ color: 'blue' }} />
                  <div>
                    <h3>{selectedOrder ? selectedOrder.customerName : "Customer Name"}</h3>
                    <h6>{selectedOrder ? `Customer id: ${selectedOrder.customerId}` : "Customer id:"}</h6>
                  </div>
                </div>
                <div className="table-filters">
                  <select>
                    <option value="">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
                <div className="table-section">
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentTableData().map((item, index) => (
                        <tr key={index}>
                          <td style={{ cursor: 'pointer' }} onClick={() => handleRowClick(item)}>{item.orderId}</td>
                          <td>{item.customerId}</td>
                          <td>{item.customerName}</td>
                          <td>{item.price}</td>
                          <td>{item.date}</td>
                          <td>
                            <MdEdit onClick={() => handleEditClick(item.orderId)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                            <RiDeleteBin6Line onClick={() => handleDeleteClick(item.orderId)} style={{ cursor: 'pointer', color: 'red' }} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="xyz">
                    <div className="pnumber">
                      <p>Showing: {getCurrentTableData().length} of {getTotalItems()}</p>
                    </div>
                    <div className="pagination">
                      <button onClick={() => handlePageChange(-1)} disabled={currentPage === 1}>Previous</button>
                      {renderPageNumbers()}
                      <button onClick={() => handlePageChange(1)} disabled={currentPage === Math.ceil(getTotalItems() / itemsPerPage)}>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details">
              <img src="profile-image-url" alt="profile" className="image" />
              <h4>{selectedOrder ? selectedOrder.customerName : "Customer Name"}</h4>
              <h5>{selectedOrder ? `Customer ID: ${selectedOrder.customerId}` : "Customer ID:"}</h5>
              <hr className="custom-line" />
              <div className="id">
                <div className="total">
                  <div className="total-left">
                    <p>Subtotal</p>
                    <p>Shipping Charge</p>
                    <p>Total</p>
                  </div>
                  <div className="total-right">
                    <p>${subTotal.toFixed(2)}</p>
                    <p>${shippingCharge.toFixed(2)}</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="note">
                  <p>Note: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="button">
                <button className="view" onClick={onNavigate(`/orders/${selectedOrder ? selectedOrder.orderId : ''}`)}>View Details</button>
                <button className="refund">Refund</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserOrderPage;
