import { useState, useCallback } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Chart, CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import UserHeader from './UserHeader';
import Footer from "./Footer";
import "./AdminOrderPage.css";

Chart.register(CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip);

const AdminOrderPage = () => {
  const AllData = [
    { orderId: 1, customer: "John", total: "$100", date: "2024-06-01", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 2, customer: "Jane", total: "$150", date: "2024-06-02", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 3, customer: "Mike", total: "$200", date: "2024-06-03", type: "Online Order", status: "Shipped", action: "View" },
    { orderId: 4, customer: "Anna", total: "$250", date: "2024-06-04", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 5, customer: "David", total: "$300", date: "2024-06-05", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 6, customer: "Eva", total: "$100", date: "2024-06-06", type: "Online Order", status: "Shipped", action: "View" },
    { orderId: 7, customer: "Chris", total: "$130", date: "2024-06-07", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 8, customer: "Paul", total: "$170", date: "2024-06-08", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 9, customer: "Sarah", total: "$220", date: "2024-06-09", type: "Online Order", status: "Shipped", action: "View" },
    { orderId: 10, customer: "Tom", total: "$190", date: "2024-06-10", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 11, customer: "Lucy", total: "$140", date: "2024-06-11", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 12, customer: "Steve", total: "$210", date: "2024-06-12", type: "Online Order", status: "Shipped", action: "View" },
    { orderId: 13, customer: "Linda", total: "$240", date: "2024-06-13", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 14, customer: "Harry", total: "$260", date: "2024-06-14", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 15, customer: "Noah", total: "$350", date: "2024-06-15", type: "Online Order", status: "Shipped", action: "View" }
];

const PendingData = [
    { orderId: 16, customer: "Alice", total: "$160", date: "2024-06-16", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 17, customer: "Oscar", total: "$170", date: "2024-06-17", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 18, customer: "Emily", total: "$180", date: "2024-06-18", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 19, customer: "Liam", total: "$190", date: "2024-06-19", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 20, customer: "Sophia", total: "$200", date: "2024-06-20", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 21, customer: "James", total: "$210", date: "2024-06-21", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 22, customer: "Olivia", total: "$220", date: "2024-06-22", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 23, customer: "Mason", total: "$230", date: "2024-06-23", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 24, customer: "Ava", total: "$240", date: "2024-06-24", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 25, customer: "Lucas", total: "$250", date: "2024-06-25", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 26, customer: "Mia", total: "$260", date: "2024-06-26", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 27, customer: "Ethan", total: "$270", date: "2024-06-27", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 28, customer: "Amelia", total: "$280", date: "2024-06-28", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 29, customer: "Logan", total: "$290", date: "2024-06-29", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 30, customer: "Zoe", total: "$300", date: "2024-06-30", type: "Online Order", status: "In Progress", action: "View" }
];

const ReturnsData = [
    { orderId: 31, customer: "Bob", total: "$310", date: "2024-07-01", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 32, customer: "Sam", total: "$320", date: "2024-07-02", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 33, customer: "Kate", total: "$330", date: "2024-07-03", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 34, customer: "Alex", total: "$340", date: "2024-07-04", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 35, customer: "Ella", total: "$350", date: "2024-07-05", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 36, customer: "Henry", total: "$360", date: "2024-07-06", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 37, customer: "Grace", total: "$370", date: "2024-07-07", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 38, customer: "Max", total: "$380", date: "2024-07-08", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 39, customer: "Hannah", total: "$390", date: "2024-07-09", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 40, customer: "Ryan", total: "$400", date: "2024-07-10", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 41, customer: "Abby", total: "$410", date: "2024-07-11", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 42, customer: "Lily", total: "$420", date: "2024-07-12", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 43, customer: "Jack", total: "$430", date: "2024-07-13", type: "Online Order", status: "In Progress", action: "View" },
    { orderId: 44, customer: "Sophia", total: "$440", date: "2024-07-14", type: "Online Order", status: "Pending", action: "View" },
    { orderId: 45, customer: "William", total: "$450", date: "2024-07-15", type: "Online Order", status: "Shipped", action: "View" }
];


    
   
    

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
    let data;
    switch (selectedTable) {
      case 'Pending':
        data = PendingData;
        break;
      case 'Returns':
        data = ReturnsData;
        break;
      default:
        data = AllData;
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  };

  const getTotalItems = () => {
    switch (selectedTable) {
      case 'Pending':
        return PendingData.length;
      case 'Returns':
        return ReturnsData.length;
      default:
        return AllData.length;
    }
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
    <div className="Product-container">
      <UserHeader />
     

      <div className="page-content">
        <nav className="sidebar">
        <br/>
        <br/>
          <div className="menu-item" onClick={onDashboardTextClick}>Dashboard</div>
          <div className="menu-item" onClick={onProductsTextClick}>Products</div>
          <div className="menu-item" onClick={onAdd_New_ProductTextClick}>Add_New_Product</div>
          <div className="menu-item" onClick={onCustomersTextClick}>Customers</div>
          <div className="menu-item" onClick={onCustomers_DetailsTextClick}>Customer_Details</div>
          <div className="menu-item" onClick={onOrderTextClick}>Order</div>
          <div className="menu-item" onClick={onOrder_DetailsTextClick}>Order_Details</div>
          <div className="menu-item" onClick={onRefundTextClick}>Refund</div>
        </nav>

        <div className="Table">
        <div className="Heading">
        <h1>Products</h1>
        <p className="page-title">GiftBliss/ <span className="select">Products</span></p>
      </div>
      <div className="table-controls">
        <div className="table-selection">
          <button onClick={() => handleTableSelection('all')} className={selectedTable === 'all' ? 'active' : ''}>All Data</button>
          <button onClick={() => handleTableSelection('Pending')} className={selectedTable === 'published' ? 'active' : ''}>Pending</button>
          <button onClick={() => handleTableSelection('Returns')} className={selectedTable === 'discount' ? 'active' : ''}>Returns</button>
        </div>
        <div className="table-filters">
         
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
              <th>OrderId</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentTableData().map((item, index) => (
              <tr key={index}>
                <td>{item.orderId}</td>
                <td>{item.customer}</td>
                <td>{item.total}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="abc">
        <div className="pnumber"><p>showing:{getCurrentTableData().length} in {getTotalItems()}</p></div>
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

export default AdminOrderPage;
