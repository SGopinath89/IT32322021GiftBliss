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
  const [selectedTable, setSelectedTable] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [editProductId, setEditProductId] = useState(null); // State to track the product being edited
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/add_product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getCurrentTableData = () => {
    let filteredProducts = products;

    if (selectedTable === 'discount') {
      filteredProducts = products.filter(product => product.discound !== null && product.discound > 0);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
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

  const handleEditClick = (productId) => {
    setEditProductId(productId); // Set the product id being edited
  };

  const handleSaveEdit = async (editedProduct) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/add_product/${editedProduct.id}`, editedProduct);
      console.log('Product updated successfully:', response.data);
      setEditProductId(null); // Clear edit mode
      // Optionally update the local products state or refetch data
      refreshProducts(); // Refresh products after edit
    } catch (error) {
      console.error('Error updating product:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleDeleteClick = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/add_product/${productId}`);
      console.log('Product deleted successfully:', response.data);
      // Remove the deleted product from local state or refetch data
      refreshProducts(); // Refresh products after delete
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const refreshProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/add_product');
      setProducts(response.data);
    } catch (error) {
      console.error('Error refreshing products:', error);
    }
  };

  const cancelEdit = () => {
    setEditProductId(null); // Cancel editing
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

  const handleTableSelection = (table) => {
    setSelectedTable(table);
    setCurrentPage(1); // Reset to first page when table selection changes
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
            <div className="table-selection">
              <button onClick={() => handleTableSelection('all')} className={selectedTable === 'all' ? 'active' : ''}>All Data</button>
              <button onClick={() => handleTableSelection('discount')} className={selectedTable === 'discount' ? 'active' : ''}>On Discount</button>
            </div>
            
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
              {/* Add Product button */}
              <button>Add Product</button>
            </div>
          </div>

          <div className="table-section">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Count</th>
                  {selectedTable === 'discount' && <th>Discount</th>}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentTableData().map(product => (
                  <tr key={product.id}>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={product.title}
                        onChange={(e) => {
                          const newTitle = e.target.value;
                          setProducts(prevProducts => prevProducts.map(p => p.id === product.id ? { ...p, title: newTitle } : p));
                        }}
                      />
                    ) : product.title}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={product.description}
                        onChange={(e) => {
                          const newDesc = e.target.value;
                          setProducts(prevProducts => prevProducts.map(p => p.id === product.id ? { ...p, description: newDesc } : p));
                        }}
                      />
                    ) : product.description}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={product.category}
                        onChange={(e) => {
                          const newCategory = e.target.value;
                          setProducts(prevProducts => prevProducts.map(p => p.id === product.id ? { ...p, category: newCategory } : p));
                        }}
                      />
                    ) : product.category}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={product.price}
                        onChange={(e) => {
                          const newPrice = e.target.value;
                          setProducts(prevProducts => prevProducts.map(p => p.id === product.id ? { ...p, price: newPrice } : p));
                        }}
                      />
                    ) : product.price}</td>
                    <td>{product.date}</td>
                    <td>{product.count}</td>
                    {selectedTable === 'discount'                      ? <td>{product.discound}</td>
                      : null
                    }
                    <td>
                      {editProductId === product.id ? (
                        <>
                          <button onClick={() => handleSaveEdit(product)}>Save</button>
                          <button onClick={() => cancelEdit()}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <MdEdit onClick={() => handleEditClick(product.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                          <RiDeleteBin6Line onClick={() => handleDeleteClick(product.id)} style={{ cursor: 'pointer', color: 'red' }} />
                        </>
                      )}
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

