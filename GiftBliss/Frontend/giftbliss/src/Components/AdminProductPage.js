import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import UserHeader from './UserHeader';
import Footer from './Footer';
import "../CSS/AdminProductPage.css";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTable, setSelectedTable] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductDetails, setEditProductDetails] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    date: '',
    count: '',
    discount: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/add_product');
        setProducts(response.data);

        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getCurrentTableData = () => {
    let filteredProducts = products;

    if (selectedTable === 'discount') {
      filteredProducts = products.filter(product => product.discount !== null && product.discount > 0);
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const getTotalItems = () => {
    let filteredProducts = products;

    if (selectedTable === 'discount') {
      filteredProducts = products.filter(product => product.discount !== null && product.discount > 0);
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredProducts.length;
  };

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setEditProductDetails({
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      date: product.date,
      count: product.count,
      discount: product.discount || ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProductDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSaveEdit = async () => {
    if (!editProductDetails.title || !editProductDetails.description || !editProductDetails.category || !editProductDetails.price || !editProductDetails.date || !editProductDetails.count) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Saving product details:', editProductDetails);

    try {
      const response = await axios.put(`http://localhost:8080/api/add_product/${editProductId}`, editProductDetails);

      if (response.status === 200) {
        alert('Product updated successfully!');
        refreshProducts();
        setEditProductId(null);
      } else {
        throw new Error('Failed to update product.');
      }
    } catch (error) {
      alert('Failed to update product: ' + error.message);
    }
  };

  const cancelEdit = () => {
    setEditProductId(null);
  };

  const handleDeleteClick = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/add_product/${productId}`);
      console.log('Product deleted successfully:', response.data);
      refreshProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const refreshProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/add_product');
      setProducts(response.data);

      const uniqueCategories = [...new Set(response.data.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error refreshing products:', error);
    }
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
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="Product-container">
      <UserHeader />
      <div className="page-content2">
        <nav className="sidebar2">
          <div className="menu-item" onClick={() => navigateTo("/dashboard")}>Dashboard</div>
          <div className="menu-item" onClick={() => navigateTo("/Products")}>Products</div>
          <div className="menu-item" onClick={() => navigateTo("/Add_New_Product")}>Add New Product</div>
          <div className="menu-item" onClick={() => navigateTo("/Customers")}>Customers</div>
          <div className="menu-item" onClick={() => navigateTo("/Customers_Details")}>Customer Details</div>
          <div className="menu-item" onClick={() => navigateTo("/Order")}>Order</div>
          <div className="menu-item" onClick={() => navigateTo("/Order_details")}>Order Details</div>
          <div className="menu-item" onClick={() => navigateTo("/Refund")}>Refund</div>
        </nav>

        <div className="Table1">
          <div className="Heading1">
            <h1>Products</h1>
            <p className="page-title1">GiftBliss / <span className="select">Products</span></p>
          </div>
          <div className="table-controls2">
            <div className="table-selection2">
              <button onClick={() => handleTableSelection('all')} className={selectedTable === 'all' ? 'active' : ''}>All Data</button>
              <button onClick={() => handleTableSelection('discount')} className={selectedTable === 'discount' ? 'active' : ''}>On Discount</button>
            </div>

            <div className="table-filters2">
           
              <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
             
              <div className="search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='search_button'><FaSearch /></button>
              </div>
              <button >
                <Link style={{ color: 'white', textDecoration: 'none' }} to='/admin/add_product'>Add Product</Link>
              </button>

            </div>
          </div>

          <div className="table-section2">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Count</th>
                  <th>Discount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentTableData().map(product => (
                  <tr key={product.id}>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={editProductDetails.title}
                        name="title"
                        onChange={handleInputChange}
                      />
                    ) : product.title}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={editProductDetails.description}
                        name="description"
                        onChange={handleInputChange}
                      />
                    ) : product.description}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={editProductDetails.category}
                        name="category"
                        onChange={handleInputChange}
                      />
                    ) : product.category}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={editProductDetails.price}
                        name="price"
                        onChange={handleInputChange}
                      />
                    ) : product.price}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={editProductDetails.date}
                        name="date"
                        onChange={handleInputChange}
                      />
                    ) : product.date}</td>
                    <td>{editProductId === product.id ? (
                      <input
                        type="text"
                        value={editProductDetails.count}
                        name="count"
                        onChange={handleInputChange}
                      />
                    ) : product.count}</td>
                    <td>
                      {editProductId === product.id ? (
                        <input
                          type="text"
                          value={editProductDetails.discount}
                          name="discount"
                          onChange={handleInputChange}
                        />
                      ) : (
                        <>
                          {product.discount}%
                        </>
                      )}
                    </td>

                    <td>
                      {editProductId === product.id ? (
                        <>
                          <button onClick={handleSaveEdit}>Save</button>
                          <button onClick={cancelEdit}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <MdEdit onClick={() => handleEditClick(product)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                          <RiDeleteBin6Line onClick={() => handleDeleteClick(product.id)} style={{ cursor: 'pointer', color: 'red' }} />
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination2">
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
