import { useState, useCallback } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Chart, CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import UserHeader from './UserHeader';
import "../CSS/AdminProductPage.css";
import Footer from "./Footer";

Chart.register(CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip);

const AdminProductPage = () => {
  const AllData = [
    { product: "Product 1", subCategory: "Category 1", attributes: "Attr 1", stockStatus: "In Stock", price: "$10", date: "2024-06-01", action: "Edit" },
    { product: "Product 2", subCategory: "Category 2", attributes: "Attr 2", stockStatus: "Out of Stock", price: "$20", date: "2024-06-02", action: "Edit" },
    { product: "Product 3", subCategory: "Category 1", attributes: "Attr 3", stockStatus: "In Stock", price: "$30", date: "2024-06-03", action: "Edit" },
    { product: "Product 4", subCategory: "Category 3", attributes: "Attr 4", stockStatus: "In Stock", price: "$40", date: "2024-06-04", action: "Edit" },
    { product: "Product 5", subCategory: "Category 2", attributes: "Attr 5", stockStatus: "Out of Stock", price: "$50", date: "2024-06-05", action: "Edit" },
    { product: "Product 6", subCategory: "Category 1", attributes: "Attr 6", stockStatus: "In Stock", price: "$60", date: "2024-06-06", action: "Edit" },
    { product: "Product 7", subCategory: "Category 3", attributes: "Attr 7", stockStatus: "In Stock", price: "$70", date: "2024-06-07", action: "Edit" },
    { product: "Product 8", subCategory: "Category 2", attributes: "Attr 8", stockStatus: "Out of Stock", price: "$80", date: "2024-06-08", action: "Edit" },
    { product: "Product 9", subCategory: "Category 1", attributes: "Attr 9", stockStatus: "In Stock", price: "$90", date: "2024-06-09", action: "Edit" },
    { product: "Product 10", subCategory: "Category 3", attributes: "Attr 10", stockStatus: "In Stock", price: "$100", date: "2024-06-10", action: "Edit" },
    { product: "Product 11", subCategory: "Category 2", attributes: "Attr 11", stockStatus: "Out of Stock", price: "$110", date: "2024-06-11", action: "Edit" },
    { product: "Product 12", subCategory: "Category 1", attributes: "Attr 12", stockStatus: "In Stock", price: "$120", date: "2024-06-12", action: "Edit" },
    { product: "Product 13", subCategory: "Category 3", attributes: "Attr 13", stockStatus: "In Stock", price: "$130", date: "2024-06-13", action: "Edit" },
    { product: "Product 14", subCategory: "Category 2", attributes: "Attr 14", stockStatus: "Out of Stock", price: "$140", date: "2024-06-14", action: "Edit" },
    { product: "Product 15", subCategory: "Category 1", attributes: "Attr 15", stockStatus: "In Stock", price: "$150", date: "2024-06-15", action: "Edit" },
  ];

  const PublishedData = [
    { product: "Product 16", subCategory: "Category 1", attributes: "Attr 16", stockStatus: "In Stock", price: "$160", date: "2024-06-16", action: "Edit" },
    { product: "Product 17", subCategory: "Category 2", attributes: "Attr 17", stockStatus: "Out of Stock", price: "$170", date: "2024-06-17", action: "Edit" },
    { product: "Product 18", subCategory: "Category 3", attributes: "Attr 18", stockStatus: "In Stock", price: "$180", date: "2024-06-18", action: "Edit" },
    { product: "Product 19", subCategory: "Category 1", attributes: "Attr 19", stockStatus: "In Stock", price: "$190", date: "2024-06-19", action: "Edit" },
    { product: "Product 20", subCategory: "Category 2", attributes: "Attr 20", stockStatus: "Out of Stock", price: "$200", date: "2024-06-20", action: "Edit" },
    { product: "Product 21", subCategory: "Category 3", attributes: "Attr 21", stockStatus: "In Stock", price: "$210", date: "2024-06-21", action: "Edit" },
    { product: "Product 22", subCategory: "Category 1", attributes: "Attr 22", stockStatus: "In Stock", price: "$220", date: "2024-06-22", action: "Edit" },
    { product: "Product 23", subCategory: "Category 2", attributes: "Attr 23", stockStatus: "Out of Stock", price: "$230", date: "2024-06-23", action: "Edit" },
    { product: "Product 24", subCategory: "Category 3", attributes: "Attr 24", stockStatus: "In Stock", price: "$240", date: "2024-06-24", action: "Edit" },
    { product: "Product 25", subCategory: "Category 1", attributes: "Attr 25", stockStatus: "In Stock", price: "$250", date: "2024-06-25", action: "Edit" },
    { product: "Product 26", subCategory: "Category 2", attributes: "Attr 26", stockStatus: "Out of Stock", price: "$260", date: "2024-06-26", action: "Edit" },
    { product: "Product 27", subCategory: "Category 3", attributes: "Attr 27", stockStatus: "In Stock", price: "$270", date: "2024-06-27", action: "Edit" },
    { product: "Product 28", subCategory: "Category 1", attributes: "Attr 28", stockStatus: "In Stock", price: "$280", date: "2024-06-28", action: "Edit" },
    { product: "Product 29", subCategory: "Category 2", attributes: "Attr 29", stockStatus: "Out of Stock", price: "$290", date: "2024-06-29", action: "Edit" },
    { product: "Product 30", subCategory: "Category 3", attributes: "Attr 30", stockStatus: "In Stock", price: "$300", date: "2024-06-30", action: "Edit" },
  ];

  const OnDiscountData = [
    { product: "Product 31", subCategory: "Category 1", attributes: "Attr 31", stockStatus: "In Stock", price: "$310", date: "2024-07-01", action: "Edit" },
    { product: "Product 32", subCategory: "Category 2", attributes: "Attr 32", stockStatus: "Out of Stock", price: "$320", date: "2024-07-02", action: "Edit" },
    { product: "Product 33", subCategory: "Category 3", attributes: "Attr 33", stockStatus: "In Stock", price: "$330", date: "2024-07-03", action: "Edit" },
    { product: "Product 34", subCategory: "Category 1", attributes: "Attr 34", stockStatus: "In Stock", price: "$340", date: "2024-07-04", action: "Edit" },
    { product: "Product 35", subCategory: "Category 2", attributes: "Attr 35", stockStatus: "Out of Stock", price: "$350", date: "2024-07-05", action: "Edit" },
    { product: "Product 36", subCategory: "Category 3", attributes: "Attr 36", stockStatus: "In Stock", price: "$360", date: "2024-07-06", action: "Edit" },
    { product: "Product 37", subCategory: "Category 1", attributes: "Attr 37", stockStatus: "In Stock", price: "$370", date: "2024-07-07", action: "Edit" },
    { product: "Product 38", subCategory: "Category 2", attributes: "Attr 38", stockStatus: "Out of Stock", price: "$380", date: "2024-07-08", action: "Edit" },
    { product: "Product 39", subCategory: "Category 3", attributes: "Attr 39", stockStatus: "In Stock", price: "$390", date: "2024-07-09", action: "Edit" },
    { product: "Product 40", subCategory: "Category 1", attributes: "Attr 40", stockStatus: "In Stock", price: "$400", date: "2024-07-10", action: "Edit" },
    { product: "Product 41", subCategory: "Category 2", attributes: "Attr 41", stockStatus: "Out of Stock", price: "$410", date: "2024-07-11", action: "Edit" },
    { product: "Product 42", subCategory: "Category 3", attributes: "Attr 42", stockStatus: "In Stock", price: "$420", date: "2024-07-12", action: "Edit" },
    { product: "Product 43", subCategory: "Category 1", attributes: "Attr 43", stockStatus: "In Stock", price: "$430", date: "2024-07-13", action: "Edit" },
    { product: "Product 44", subCategory: "Category 2", attributes: "Attr 44", stockStatus: "Out of Stock", price: "$440", date: "2024-07-14", action: "Edit" },
    { product: "Product 45", subCategory: "Category 3", attributes: "Attr 45", stockStatus: "In Stock", price: "$450", date: "2024-07-15", action: "Edit" },
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
      case 'published':
        data = PublishedData;
        break;
      case 'discount':
        data = OnDiscountData;
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
      case 'published':
        return PublishedData.length;
      case 'discount':
        return OnDiscountData.length;
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
          <button onClick={() => handleTableSelection('published')} className={selectedTable === 'published' ? 'active' : ''}>Published</button>
          <button onClick={() => handleTableSelection('discount')} className={selectedTable === 'discount' ? 'active' : ''}>On Discount</button>
        </div>
        <div className="table-filters">
          <select>
            <option value="">category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </select>
          <div className="search">
          <input type="text" placeholder="Search..." />
          <button className='search_button'><FaSearch /></button>
          </div>
          <button>Add Product</button>
        </div>
      </div>

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Sub-Category</th>
              <th>Attributes</th>
              <th>Stock Status</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentTableData().map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.subCategory}</td>
                <td>{item.attributes}</td>
                <td>{item.stockStatus}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
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

export default AdminProductPage;
