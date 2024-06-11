import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip } from 'chart.js';
import UserHeader from './UserHeader';
import Footer from "./Footer";
import "../CSS/AdminAddProduct.css";

Chart.register(CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip);

const AdminAddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    price: "",
    gender: "",
    size: "",
    tag: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleNavigation = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageUrl);
      setItemDetails({ ...itemDetails, image: imageUrl });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const imageUrl = URL.createObjectURL(e.dataTransfer.files[0]);
      setSelectedImage(imageUrl);
      setItemDetails({ ...itemDetails, image: imageUrl });
      e.dataTransfer.clearData();
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.split('\n').map(line => 
      line.length > 40 ? line.match(/.{1,40}/g).join('\n') : line
    ).join('\n');
    setItemDetails({ ...itemDetails, description: formattedValue });
  };

  return (
    <div className="CDetails-container">
      <UserHeader />
      <div className="content-wrapper">
        <nav className="sidebar">
          <div className="menu-item" onClick={() => handleNavigation("/")}>Dashboard</div>
          <div className="menu-item" onClick={() => handleNavigation("/Products")}>Products</div>
          <div className="menu-item" onClick={() => handleNavigation("/Add_New_Product")}>Add New Product</div>
          <div className="menu-item" onClick={() => handleNavigation("/Customers")}>Customers</div>
          <div className="menu-item" onClick={() => handleNavigation("/Customers_Details")}>Customer Details</div>
          <div className="menu-item" onClick={() => handleNavigation("/Order")}>Order</div>
          <div className="menu-item" onClick={() => handleNavigation("/Order_details")}>Order Details</div>
          <div className="menu-item" onClick={() => handleNavigation("/Refund")}>Refund</div>
        </nav>
        <div className="main-content">
          <div className="right-content">
            <div className="column-container">
            <p>Upload image</p>
              <div 
                className={`image-upload ${dragActive ? "drag-active" : ""}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {!selectedImage && (
                  <div className="upload-box">
                    <p>Drag & Drop your files or</p>
                  </div>
                )}
                {selectedImage && <img src={selectedImage} alt="Selected" className="uploaded-image" />}
                <label htmlFor="fileInput" className="file-label">Choose File</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  style={{ display: "none" }} 
                  id="fileInput"
                />
              </div>
            </div>
          </div>
          <div className="item-details">
            <div className="form-group">
              <label>Title</label>
              <input 
                type="text" 
                value={itemDetails.title} 
                onChange={(e) => setItemDetails({ ...itemDetails, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea 
                value={itemDetails.description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select 
                value={itemDetails.category}
                onChange={(e) => setItemDetails({ ...itemDetails, category: e.target.value })}
              >
                <option>All Category</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="form-group">
              <label>Product Date</label>
              <input 
                type="date" 
                value={itemDetails.date}
                onChange={(e) => setItemDetails({ ...itemDetails, date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Price ($)</label>
              <div className="dollar-input">
                
                <input 
                  type="number" 
                  value={itemDetails.price}
                  onChange={(e) => setItemDetails({ ...itemDetails, price: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select 
                value={itemDetails.gender}
                onChange={(e) => setItemDetails({ ...itemDetails, gender: e.target.value })}
              >
                <option>--Gender--</option>
                <option>books</option>
                <option>toy</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Size</label>
              <input 
                type="text" 
                value={itemDetails.size}
                onChange={(e) => setItemDetails({ ...itemDetails, size: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Tag</label>
              <input 
                type="text" 
                placeholder="Enter a Tag..."
                value={itemDetails.tag}
                onChange={(e) => setItemDetails({ ...itemDetails, tag: e.target.value })}
              />
            </div>
            <div className="form-actions">
              <button>Add Product</button>
              <button>Save Product</button>
            </div>
          </div>
          <div className="details">
            {selectedImage && <img className="image" alt="Product" src={itemDetails.image} />}
            <h4>Title</h4>
            <h5>{itemDetails.title}</h5>
            <p>Description:<br/>
              {itemDetails.description}
            </p>
           
            <p>Product Date: {itemDetails.date}</p>
            <p>For this product: {itemDetails.gender}</p>
            <p>Size: {itemDetails.size}</p>
            <p>This retails for: ${itemDetails.price}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAddProduct;
