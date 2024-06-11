import { useState, useCallback } from "react";
import {  FaSearch, FaTrash, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Chart, CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import UserHeader from './UserHeader';
import "../CSS/AdminCustomerDetailsPage.css";
import Footer from "./Footer";
import { MdEdit, MdOutlineShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";

Chart.register(CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip);

const AdminCustomerDetailsPage = () => {
  // const DetailsData = [
  const initialDetailsData = [  
    { orderId: "001", payment: "$100", date: "2023-05-01", status: "Completed", invoice: "INV-001", action: "View" },
    { orderId: "002", payment: "$200", date: "2023-05-02", status: "Pending", invoice: "INV-002", action: "View" },
    { orderId: "003", payment: "$300", date: "2023-05-03", status: "Cancelled", invoice: "INV-003", action: "View" },
    { orderId: "004", payment: "$400", date: "2023-05-04", status: "Completed", invoice: "INV-004", action: "View" },
    { orderId: "005", payment: "$500", date: "2023-05-05", status: "Pending", invoice: "INV-005", action: "View" },
    { orderId: "006", payment: "$600", date: "2023-05-06", status: "Completed", invoice: "INV-006", action: "View" },
    { orderId: "007", payment: "$700", date: "2023-05-07", status: "Pending", invoice: "INV-007", action: "View" },
    { orderId: "008", payment: "$800", date: "2023-05-08", status: "Cancelled", invoice: "INV-008", action: "View" },
    { orderId: "009", payment: "$900", date: "2023-05-09", status: "Completed", invoice: "INV-009", action: "View" },
    { orderId: "010", payment: "$1000", date: "2023-05-10", status: "Pending", invoice: "INV-010", action: "View" },
    { orderId: "011", payment: "$1100", date: "2023-05-11", status: "Completed", invoice: "INV-011", action: "View" },
    { orderId: "012", payment: "$1200", date: "2023-05-12", status: "Pending", invoice: "INV-012", action: "View" },
    { orderId: "013", payment: "$1300", date: "2023-05-13", status: "Cancelled", invoice: "INV-013", action: "View" },
    { orderId: "014", payment: "$1400", date: "2023-05-14", status: "Completed", invoice: "INV-014", action: "View" },
    { orderId: "015", payment: "$1500", date: "2023-05-15", status: "Pending", invoice: "INV-015", action: "View" },
  ];

  const [DetailsData,setDetailsData]=useState(initialDetailsData);
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/Products");
  }, [navigate]);

  const onAdd_New_ProductTextClick = useCallback(() => {
    navigate("/Add_New_Product");
  }, [navigate]);

  const onCustomersTextClick = useCallback(() => {
    navigate("/Customers");
  }, [navigate]);

  const onCustomers_DetailsTextClick = useCallback(() => {
    navigate("/Customers_Details");
  }, [navigate]);

  const onOrderTextClick = useCallback(() => {
    navigate("/Order");
  }, [navigate]);

  const onOrder_DetailsTextClick = useCallback(() => {
    navigate("/Order_details");
  }, [navigate]);

  const onRefundTextClick = useCallback(() => {
    navigate("/Refund");
  }, [navigate]);

  const [selectedTable, setSelectedTable] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleTableSelection = (table) => {
    setSelectedTable(table);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getCurrentTableData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return DetailsData.slice(indexOfFirstItem, indexOfLastItem);
  };

  const getTotalItems = () => {
    return DetailsData.length;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(getTotalItems() / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => setCurrentPage(i)} className={i === currentPage ? "active" : ""}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const handleEditClick = (orderId) => {
    // Handle edit logic, for example, navigate to edit page
    navigate(`/edit/${orderId}`);
  };

  const handleDeleteClick = (orderId) => {
    // Handle delete logic, for example, update state to remove the item
    setDetailsData(DetailsData.filter(item => item.orderId !== orderId));
  };

  return (
    <div className="CDetails-container">
      <UserHeader />
      <div className="content-wrapper">
        <nav className="sidebar">
          <div className="menu-item" onClick={onDashboardTextClick}>Dashboard</div>
          <div className="menu-item" onClick={onProductsTextClick}>Products</div>
          <div className="menu-item" onClick={onAdd_New_ProductTextClick}>Add_New_Product</div>
          <div className="menu-item" onClick={onCustomersTextClick}>Customers</div>
          <div className="menu-item" onClick={onCustomers_DetailsTextClick}>Customer_Details</div>
          <div className="menu-item" onClick={onOrderTextClick}>Order</div>
          <div className="menu-item" onClick={onOrder_DetailsTextClick}>Order_Details</div>
          <div className="menu-item" onClick={onRefundTextClick}>Refund</div>
        </nav>
        <div className="abc">
          <div className="Heading">
            <h1>Customer Details</h1>
            <p className="page-title">GiftBliss/ <span className="select">Customer Details</span></p>
          </div>
          <div className="main-content">
            <div className="details">
              <p>
                <FaUserCircle className="image" style={{  color:'blue' }}/>
                {/* <img className="image" alt="shopping" src="" /> */}
                <h4>Name</h4>
                <h5>New York, USA</h5>
                <p>Email: example@gmail.com
                  <br />Phone: +1 234 567 89
                  <br />Date of birth: 05 June 2001
                  <br />Address: 1277 Rollins Road Grand Island, NE 68801
                <br />
                <hr className="custom-line" />
                <br />About:
                  <br /> Hi I'm Merri Diamond, has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
              </p>
            </div>
            <div className="right-content">
              <div className="column-container">
                <div className="column-graph">
                  <p>
                    <CiDollar className="icon small-image"/>
                    {/* <img className="icon small-image" alt="shopping" src="/images/shopping.svg" /> */}
                    <br />
                    <br />
                    <br />
                    <br />$8564
                    <br />TOTAL COST
                    <br />Last Payment $300.00
                  </p>
                </div>
                <div className="column-graph">
                  <p>
                    <img className="icon small-image" alt="shopi" src="/images/shopi.jpg" />
                    <br />
                    <br />
                    <br /> 312
                    <br /> TOTAL ORDER
                    <br />3 Weekly Average
                  </p>
                </div>
                <div className="column-graph">
                  <p>
                    <img className="icon small-image" alt="dollar" src="/images/dollar-sign-bag.svg" />
                    <br />
                    <br />
                    <br /> $450.00
                    <br />PENDING PAYMENT
                    <br />Last Date : 26 April 2024 15Days
                  </p>
                </div>
              </div>
              <div className="Table">
              <div className="table-filters">
          <select>
            <option value="">All</option>
            <option value="Category 1">Completed</option>
            <option value="Category 2">Pending</option>
            
          </select>
          
        </div>
                
                <div className="table-section">
                  <table>
                    <thead>
                      <tr>
                        <th>Order Id</th>
                        <th>Payment</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Invoice</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCurrentTableData().map((item, index) => (
                        <tr key={index}
                        onClick={() => handleTableSelection(item.orderId)} // Add click handler
                          className={item.orderId === selectedTable ? "selected-row" : ""}
                        >
                          <td>{item.orderId}</td>
                          <td>{item.payment}</td>
                          <td>{item.date}</td>
                          <td>{item.status}</td>
                          <td>{item.invoice}</td>
                          {/* <td>{item.action}</td> */}
                          <td>
                            <MdEdit onClick={()=>handleEditClick(item.orderId)} style={{cursor: 'pointer', marginRight: '10px'}}/>
                            <RiDeleteBin6Line onClick={() => handleDeleteClick(item.orderId)} style={{ cursor: 'pointer', color: 'red' }}/>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="xyz">
                    <div className="pnumber"><p>showing: {getCurrentTableData().length} of {getTotalItems()}</p></div>
                    <div className="pagination">
                      <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                      {renderPageNumbers()}
                      <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= getTotalItems()}>Next</button>
                    </div>
                  </div>
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

export default AdminCustomerDetailsPage;
