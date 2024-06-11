import React, { useState, useCallback } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import UserHeader from './UserHeader';
import Footer from "./Footer";
import "../CSS/AdminRefundPage.css";

const AdminRefundPage = () => {
  const initialDetailsData = [
    { orderId: "ORD001", customerId: "CUST001", customerName: "John Doe", price: "$1000", date: "2023-05-01" },
    { orderId: "ORD002", customerId: "CUST002", customerName: "Jane Smith", price: "$200", date: "2023-05-02" },
    { orderId: "ORD003", customerId: "CUST003", customerName: "Bob Johnson", price: "$300", date: "2023-05-03" },
    { orderId: "ORD004", customerId: "CUST004", customerName: "Alice Brown", price: "$400", date: "2023-05-04" },
    { orderId: "ORD005", customerId: "CUST005", customerName: "Charlie Davis", price: "$50", date: "2023-05-05" },
    { orderId: "ORD006", customerId: "CUST006", customerName: "Dana White", price: "$60", date: "2023-05-06" },
    { orderId: "ORD007", customerId: "CUST007", customerName: "Evan Black", price: "$25", date: "2023-05-07" },
    { orderId: "ORD008", customerId: "CUST008", customerName: "Grace Lee", price: "$10", date: "2023-05-08" },
    { orderId: "ORD009", customerId: "CUST009", customerName: "Henry Green", price: "$70", date: "2023-05-09" },
    { orderId: "ORD010", customerId: "CUST010", customerName: "Isabel Wilson", price: "$120", date: "2023-05-10" },
    { orderId: "ORD011", customerId: "CUST011", customerName: "Jack Thomas", price: "$20", date: "2023-05-11" },
    { orderId: "ORD012", customerId: "CUST012", customerName: "Karen Taylor", price: "$40", date: "2023-05-12" },
    { orderId: "ORD013", customerId: "CUST013", customerName: "Liam Moore", price: "$300", date: "2023-05-13" },
    { orderId: "ORD014", customerId: "CUST014", customerName: "Mia Anderson", price: "$80", date: "2023-05-14" },
    { orderId: "ORD015", customerId: "CUST015", customerName: "Noah Martinez", price: "$15", date: "2023-05-15" },
  ];

  const [detailsData, setDetailsData] = useState(initialDetailsData);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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

  const getTotalItems = () => {
    return detailsData.length;
  };

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
  };

  const subTotal = selectedOrder ? parseFloat(selectedOrder.price.replace('$', '')) : 0;
  const shippingCharge = 50; // Example static shipping charge
  const total = subTotal + shippingCharge;

  return (
    <div className="CDetails-container">
      <UserHeader />
      <div className="content-wrapper">
        <nav className="sidebar">
          <div className="menu-item" onClick={onNavigate("/")}>Dashboard</div>
          <div className="menu-item" onClick={onNavigate("/Products")}>Products</div>
          <div className="menu-item" onClick={onNavigate("/Add_New_Product")}>Add New Product</div>
          <div className="menu-item" onClick={onNavigate("/Customers")}>Customers</div>
          <div className="menu-item" onClick={onNavigate("/Customers_Details")}>Customer Details</div>
          <div className="menu-item" onClick={onNavigate("/Order")}>Order</div>
          <div className="menu-item" onClick={onNavigate("/Order_details")}>Order Details</div>
          <div className="menu-item" onClick={onNavigate("/Refund")}>Refund</div>
        </nav>
        <div className="abc">
          <div className="Heading">
            <h1>Refund :#</h1>
            <p className="page-title">GiftBliss/ <span className="select">Refund</span></p>
          </div>
          <div className="main-content">
            <div className="right-content">
              <div className="column-container">

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
                      <button onClick={() => handlePageChange(1)} disabled={currentPage * itemsPerPage >= getTotalItems()}>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details">
              <div className="column-graph">
                <div className="id">
                  <div className="total">
                    <div className="total-left">
                      <p>Sub Total</p>
                      <p>Shipping Charge</p>
                      <p>Total</p>
                    </div>
                    <div className="total-right">
                      <p>${subTotal.toFixed(2)}</p>
                      <p>${shippingCharge.toFixed(2)}</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                  <hr className="custom-line" />
                  <br />
                  <div className="Note">
                    Note: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Amount ($)</label>
                <div className="dollar-input">
                  <input type="number" placeholder="Price" />
                </div>
              </div>
              <div className="form-group">
                <label>Reply</label>
                <textarea placeholder="Reply"></textarea>
              </div>
              <div className="button">
                <button>Refund</button>
                <button>Decline</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminRefundPage;

