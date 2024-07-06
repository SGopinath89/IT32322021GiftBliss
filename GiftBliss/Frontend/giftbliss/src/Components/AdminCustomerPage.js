import { useState, useCallback } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Chart, CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import UserHeader from './UserHeader';
import Footer from "./Footer";
import "../CSS/AdminCustomerPage.css";

Chart.register(CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip);

const AdminCustomerPage = () => {
    const Customers = [
      { customer: "John Doe", phone: "123-456-7890", email: "john@example.com", status: "Active", lastOrder: "2024-06-01", invoice: "#INV001", action: "Edit" },
      { customer: "Jane Smith", phone: "234-567-8901", email: "jane@example.com", status: "Inactive", lastOrder: "2024-06-02", invoice: "#INV002", action: "Edit" },
      { customer: "Alice Johnson", phone: "345-678-9012", email: "alice@example.com", status: "Active", lastOrder: "2024-06-03", invoice: "#INV003", action: "Edit" },
      { customer: "Bob Brown", phone: "456-789-0123", email: "bob@example.com", status: "Active", lastOrder: "2024-06-04", invoice: "#INV004", action: "Edit" },
      { customer: "Charlie Davis", phone: "567-890-1234", email: "charlie@example.com", status: "Inactive", lastOrder: "2024-06-05", invoice: "#INV005", action: "Edit" },
      { customer: "Diana Evans", phone: "678-901-2345", email: "diana@example.com", status: "Active", lastOrder: "2024-06-06", invoice: "#INV006", action: "Edit" },
      { customer: "Eve Foster", phone: "789-012-3456", email: "eve@example.com", status: "Active", lastOrder: "2024-06-07", invoice: "#INV007", action: "Edit" },
      { customer: "Frank Green", phone: "890-123-4567", email: "frank@example.com", status: "Inactive", lastOrder: "2024-06-08", invoice: "#INV008", action: "Edit" },
      { customer: "Grace Harris", phone: "901-234-5678", email: "grace@example.com", status: "Active", lastOrder: "2024-06-09", invoice: "#INV009", action: "Edit" },
      { customer: "Henry Irwin", phone: "012-345-6789", email: "henry@example.com", status: "Active", lastOrder: "2024-06-10", invoice: "#INV010", action: "Edit" },
      { customer: "Isabella Jackson", phone: "123-456-7890", email: "isabella@example.com", status: "Inactive", lastOrder: "2024-06-11", invoice: "#INV011", action: "Edit" },
      { customer: "Jack King", phone: "234-567-8901", email: "jack@example.com", status: "Active", lastOrder: "2024-06-12", invoice: "#INV012", action: "Edit" },
      { customer: "Karen Lee", phone: "345-678-9012", email: "karen@example.com", status: "Active", lastOrder: "2024-06-13", invoice: "#INV013", action: "Edit" },
      { customer: "Larry Moore", phone: "456-789-0123", email: "larry@example.com", status: "Inactive", lastOrder: "2024-06-14", invoice: "#INV014", action: "Edit" },
      { customer: "Mary Nelson", phone: "567-890-1234", email: "mary@example.com", status: "Active", lastOrder: "2024-06-15", invoice: "#INV015", action: "Edit" },
    ];
  
    const navigate = useNavigate();
  
    const [selectedTable, setSelectedTable] = useState('all');
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
      return Customers.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);
    };
  
    const getTotalItems = () => {
      return Customers.length;
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
  
    const onDashboardTextClick = useCallback(() => {
      navigate("/");
    }, [navigate]);
  
    const onProductsTextClick = useCallback(() => {
      navigate("/Products");
    }, [navigate]);
  
    const onAdd_ProductTextClick = useCallback(() => {
      navigate("/Add_Product");
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

    const handleEditClick = (orderId) => {
        // Your edit logic here
        console.log(`Edit order ${orderId}`);
    };

    const handleDeleteClick = (orderId) => {
        // Your delete logic here
        console.log(`Delete order ${orderId}`);
    };
  
    return (
      <div className="Product-container">
        <UserHeader />
  
        <div className="page-content">
          <nav className="sidebar">
            <br/>
            <br/>
            <div className="menu-item" onClick={onDashboardTextClick}>Dashboard</div>
            <div className="menu-item" onClick={onProductsTextClick}>Products</div>
            <div className="menu-item" onClick={onAdd_ProductTextClick}>Add Product</div>
            <div className="menu-item" onClick={onCustomersTextClick}>Customers</div>
            <div className="menu-item" onClick={onCustomers_DetailsTextClick}>Customer_Details</div>
            <div className="menu-item" onClick={onOrderTextClick}>Order</div>
            <div className="menu-item" onClick={onOrder_DetailsTextClick}>Order_Details</div>
            <div className="menu-item" onClick={onRefundTextClick}>Refund</div>
          </nav>
  
          <div className="Table">
            <div className="Heading">
              <h1>Customers</h1>
              <p className="page-title">GiftBliss/ <span className="select">Customers</span></p>
            </div>
            <div className="table-controls">
              <div className="table-filters">
                <select>
                  <option value="">status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <div className="search">
                <input type="text" placeholder="Search..." />
                <button className='search_button'><FaSearch /></button>
                </div>
              </div>
            </div>
  
            <div className="table-section">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Last Order</th>
                    <th>Invoice</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentTableData().map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.customer}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.email}</td>
                      <td>{customer.status}</td>
                      <td>{customer.lastOrder}</td>
                      <td>{customer.invoice}</td>
                      <td>
                            <MdEdit onClick={() => handleEditClick(customer.orderId)} style={{cursor: 'pointer', marginRight: '10px'}}/>
                            <RiDeleteBin6Line onClick={() => handleDeleteClick(customer.orderId)} style={{ cursor: 'pointer', color: 'red' }}/>
                          </td>

                    </tr>
                  ))}
                </tbody>
              </table>
  
              <div className="abc">
                <div className="pnumber">
                  <p>showing: {getCurrentTableData().length} of {getTotalItems()}</p>
                </div>
                <div className="pagination">
                  <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                  {renderPageNumbers()}
                  <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= getTotalItems()}>Next</button>
                </div>
              </div>
  
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      
    );
  };
  
  export default AdminCustomerPage;
