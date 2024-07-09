import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from './UserHeader';
import Footer from "./Footer";
import "../CSS/AdminAddProduct.css";

const AdminAddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    price: "",
    mainCategory: "",
    size: "",
    count: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setItemDetails(prevState => ({ ...prevState, image: imageUrl }));
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
    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setItemDetails(prevState => ({ ...prevState, image: imageUrl }));
      e.dataTransfer.clearData();
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.split('\n').map(line =>
      line.length > 40 ? line.match(/.{1,40}/g).join('\n') : line
    ).join('\n');
    setItemDetails(prevState => ({ ...prevState, description: formattedValue }));
  };

  const handleNavigation = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  const handleAddProduct = async () => {
    if (!itemDetails.title || !itemDetails.description || !itemDetails.price || !itemDetails.image) {
      alert('Please fill in all required fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/add_product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemDetails),
      });
      if (response.ok) {
        alert('Product added successfully!');
        // Clear form fields after successful addition
        setItemDetails({
          title: "",
          description: "",
          category: "",
          date: "",
          price: "",
          mainCategory: "",
          size: "",
          count: "",
          image: ""
        });
        setSelectedImage(null);
      } else {
        throw new Error('Failed to add product.');
      }
    } catch (error) {
      alert('Failed to add product: ' + error.message);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setItemDetails(prevState => ({ ...prevState, image: "" }));
  };

  return (
    <div className="addproduct-container">
      <UserHeader />
      <div className="content-wrapper1">
        <nav className="sidebar1">
          <div className="menu-item" onClick={() => handleNavigation("/dashboard")}>Dashboard</div>
          <div className="menu-item" onClick={() => handleNavigation("/Products")}>Products</div>
          <div className="menu-item" onClick={() => handleNavigation("/Add_Product")}>Add Product</div>
          <div className="menu-item" onClick={() => handleNavigation("/Customers")}>Customers</div>
          <div className="menu-item" onClick={() => handleNavigation("/Customers_Details")}>Customer Details</div>
          <div className="menu-item" onClick={() => handleNavigation("/Order")}>Order</div>
          <div className="menu-item" onClick={() => handleNavigation("/Order_details")}>Order Details</div>
          <div className="menu-item" onClick={() => handleNavigation("/Refund")}>Refund</div>
        </nav>
        <div className="main-content1">
          <div className="right-content1">
            <div className="column-container1">
              <p>Upload Image</p>
              <div
                className={`image-upload ${dragActive ? "drag-active" : ""}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {!selectedImage && (
                  <div className="upload-box1">
                    <p>Drag & Drop your files or</p>
                    <label htmlFor="fileInput" className="file-label">Choose File</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                      id="fileInput"
                    />
                  </div>
                )}
                {selectedImage && (
                  <div className="selected-image-container">
                    <img src={selectedImage} alt="Selected" className="uploaded-image1" />
                    <button className="change-image-button" onClick={handleImageRemove}>Change Image</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="item-details1">
            <div className="form-group1">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={itemDetails.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group1">
              <label>Description</label>
              <textarea
                name="description"
                value={itemDetails.description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="form-group1">
              <label>Category</label>
              <select
                name="category"
                value={itemDetails.category}
                onChange={handleInputChange}
              >
                <option value="">All Category</option>
                <option value="Art">Art Supplies</option>
                <option value="Children's Book">Children's Book</option>
                <option value="Fiction">Fiction</option>
                <option value="Non Fiction">Non Fiction</option>
                <option value="Journals & Notebooks">Journals & Notebooks</option>
                <option value="Office Supplies">Office Supplies</option>
                <option value="Audio Equipment">Audio Equipment</option>
                <option value="Computer Accessories">Computer Accessories</option>
                <option value="Gaming">Gaming</option>
                <option value="Personal Electronics">Personal Electronics</option>
                <option value="Smart Home Devices">Smart Home Devices</option>
                <option value="Wearable Tech">Wearable Tech</option>
                <option value="Apparel">Apparel</option>
                <option value="Bags & Wallets">Bags & Wallets</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Footwears">Footwears</option>
                <option value="Watches">Watches</option>
                <option value="Fragrance">Fragrance</option>
                <option value="Haircare">Haircare</option>
                <option value="Makeup">Makeup</option>
                <option value="Skincare">Skincare</option>
                <option value="Wellness">Wellness</option>
                <option value="Bath">Bath</option>
                <option value="Bedding">Bedding</option>
                <option value="Furniture">Furniture</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Kitchenware">Kitchenware</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Action Figures">Action Figures</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational Toys">Educational Toys</option>
                <option value="Outdoor Toys">Outdoor Toys</option>
                <option value="Puzzles">Puzzles</option>
                <option value="Remote Control">Remote Control</option>
              </select>
            </div>
            <div className="form-group1">
              <label>Product Date</label>
              <input
                type="date"
                name="date"
                value={itemDetails.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group1">
              <label>Price ($)</label>
              <div className="dollar-input">
                <span>$</span>
                <input
                  type="number"
                  name="price"
                  value={itemDetails.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group1">
              <label>Main Category</label>
              <select
                name="main_Category"
                value={itemDetails.main_Category}
                onChange={handleInputChange}
              >
                <option value="">--Main Category--</option>
                <option value="books">Books & Stationery</option>
                <option value="electronics">Electronics & Gadgets</option>
                <option value="fashion">Fashion & Accessories</option>
                <option value="health">Health & Beauty</option>
                <option value="home">Home & Living</option>
                <option value="toys">Toys & Games</option>
              </select>
            </div>
            <div className="form-group1">
              <label>Size</label>
              <input
                type="text"
                name="size"
                value={itemDetails.size}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group1">
              <label>Count</label>
              <input
                type="number"
                name="count"
                placeholder="Enter a count..."
                value={itemDetails.count}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-actions1">
              <button onClick={handleAddProduct}>Add Product</button>
              {/* Add other actions or buttons here */}
            </div>
          </div>
          <div className="details1">
            {selectedImage && <img className="image" alt="Product" src={itemDetails.image} />}
            <h4>Title</h4>
            <h5>{itemDetails.title}</h5>
            <p>Description:<br />
              {itemDetails.description}
            </p>
            <p>Product Date: {itemDetails.date}</p>
            <p>Main Category: {itemDetails.main_Category}</p>
            <p>Size: {itemDetails.size}</p>
            <p>Price: ${itemDetails.price}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAddProduct;

