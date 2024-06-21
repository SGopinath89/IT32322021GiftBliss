import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import UserHeader from './UserHeader';
import Footer from './Footer';
import "../CSS/AdminProductPage.css";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/add_product'); // Adjust endpoint if needed
        console.log(response.data); // Check if this logs the expected product data
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error (e.g., show error message to user)
      }
    };
  
    fetchProducts();
  }, []);

  const getCurrentTableData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return products.slice(indexOfFirstItem, indexOfLastItem);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getTotalItems = () => {
    return products.length;
  };

  const handleEditClick = (productName) => {
    console.log("Edit clicked for product:", productName);
    // Implement edit functionality
  };

  const handleDeleteClick = (productName) => {
    console.log("Delete clicked for product:", productName);
    // Implement delete functionality
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(getTotalItems() / itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
        className={currentPage === i + 1 ? "active" : ""}
      >
        {i + 1}
      </button>
    ));
  };

  return (
    <div className="Product-container">
      <UserHeader />
      <div className="page-content">
        <nav className="sidebar">
          <div className="menu-item" onClick={() => navigateTo("/")}>Dashboard</div>
          <div className="menu-item" onClick={() => navigateTo("/Products")}>Products</div>
          <div className="menu-item" onClick={() => navigateTo("/Add_New_Product")}>Add New Product</div>
          <div className="menu-item" onClick={() => navigateTo("/Customers")}>Customers</div>
          <div className="menu-item" onClick={() => navigateTo("/Customers_Details")}>Customer Details</div>
          <div className="menu-item" onClick={() => navigateTo("/Order")}>Order</div>
          <div className="menu-item" onClick={() => navigateTo("/Order_details")}>Order Details</div>
          <div className="menu-item" onClick={() => navigateTo("/Refund")}>Refund</div>
        </nav>

        <div className="Table">
          <div className="Heading">
            <h1>Products</h1>
            <p className="page-title">GiftBliss / <span className="select">Products</span></p>
          </div>
          <div className="table-controls">
            
            <div className="table-filters">
              <select>
                <option value="">Category</option>
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
                  <th>Title</th>
                  <th>Category</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Count</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentTableData().map(product => (
                  <tr key={product.title}>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.size}</td>
                    <td>{product.price}</td>
                    <td>{product.date}</td>
                    <td>{product.count}</td>
                    <td>
                      <MdEdit onClick={() => handleEditClick(product.title)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                      <RiDeleteBin6Line onClick={() => handleDeleteClick(product.title)} style={{ cursor: 'pointer', color: 'red' }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
              {renderPageNumbers()}
              <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= getTotalItems()}>Next</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProductPage;