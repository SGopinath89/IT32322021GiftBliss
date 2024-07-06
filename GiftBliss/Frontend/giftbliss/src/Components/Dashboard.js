import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import axios from "axios";
import "../CSS/Dashboard.css";
import UserHeader from "./UserHeader";

Chart.register(CategoryScale, LinearScale, LineController, BarController, PointElement, LineElement, BarElement, Title, Legend, Tooltip);

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Define loading state

  // Function to fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/add_product");
      setProducts(response.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false); // Handle error and set loading to false
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products only once when the component mounts

  // Example chart data
  const earningData = [
    { Date: "2024-06-01", Item_Count: "50", Tax: "$100.00", Earning: "$8050.00" },
    { Date: "2024-06-02", Item_Count: "25", Tax: " ", Earning: "$509.00" },
    { Date: "2024-06-03", Item_Count: "65", Tax: "$115.00", Earning: "$12000.00" },
    { Date: "2024-06-04", Item_Count: "29", Tax: " ", Earning: "$5000.00"},
    { Date: "2024-06-05", Item_Count: "4", Tax: "$30.00", Earning: "$6000.00" },
  ];

  const lineChartRef = useRef(null);
  const barChartRef1 = useRef(null);

  useEffect(() => {
    return () => {
      if (lineChartRef.current && lineChartRef.current.chartInstance) {
        lineChartRef.current.chartInstance.destroy();
      }
      if (barChartRef1.current && barChartRef1.current.chartInstance) {
        barChartRef1.current.chartInstance.destroy();
      }
    };
  }, []);

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'This Year',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40, 60, 72, 66, 57, 78],
      },
      {
        label: 'Last Year',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        data: [45, 56, 72, 68, 56, 86, 65, 58, 68, 67, 86, 78],
      },
    ],
  };

  const barChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40, 60, 72, 66, 57, 78,85, 79, 100, 101, 76],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 10, 
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 10, 
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          autoSkip: false,
          display: false,
          maxRotation: 15,
          maxTicksLimit: 25,
          font: {
            size: 10, 
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10, 
          },
        },
      },
    },
    title: {
      display: true,
      text: 'Earnings Overview',
      font: {
        size: 10, 
      },
    },
    dataset: {
      barThickness: 5,
    },
  };

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
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

  return (
    <div className="dashboard-container">
      <UserHeader/>
      <div className="Heading">
        <h1>Dashboard</h1>
        <p className="dashboard-title">GiftBliss/ <span className="select">Dashboard</span></p>
      </div>
      
      <div className="column-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div className="column-graph">
          <p>
            <i className="fas fa-shopping-cart"></i>
            Total Order<br />15012<br />
            <span style={{ color: 'green' }}>+5%</span> New session today
            <img className="icon" alt="Location" src="../images/shopping.svg" />
          </p>
          <Bar ref={barChartRef1} data={barChartData1} options={chartOptions} />
        </div>
        <div className="column-graph" style={{ height: '300px', width: '20%' }}>
          <p>
            <i className="fas fa-shopping-cart" style={{ marginRight: '10px', alignItems:'left'}}></i>
            New Customer<br></br> 150<br />
            <span style={{ color: 'green' }}>+0.5%</span> Bounce rate weekly
            <img className="icon" alt="Location" src="../images/shopi.jpg" />
          </p>
          <Line ref={lineChartRef} data={lineChartData} options={chartOptions} />
        </div>
        <div className="column-graph" style={{ height: '300px', width: '20%' }}>
          <p>
            <i className="fas fa-shopping-cart" style={{ marginRight: '10px', alignItems:'left'}}></i>
            Total Revenue<br></br> $84500<br />
            <span style={{ color: 'green' }}>+1.8%</span> Complections Weekly
            <img className="icon" alt="Location" src="../images/dollar-sign-bag.svg" />
          </p>
          <img className="ic" alt="Wallet" src="../images/Wallet-amico.svg" />
        </div>
      </div>
      
      <div className="graph-section" style={{ width: '100%' , autoSkip: false,maxRotation: 11}}>
        <div className="line-graph" style={{ height: '500px', width: '100%' }}>
          <h4>Sales Report</h4>
          <Line ref={lineChartRef} data={lineChartData} options={chartOptions} />
        </div>
      </div>
     
      <div className="dashboard-content">
        <nav className="sidebar">
          <div className="menu-item" onClick={onDashboardTextClick}>Dashboard</div>
          <div className="menu-item" onClick={onProductsTextClick}>Products</div>
            <div className="menu-item" onClick={onAdd_ProductTextClick}>Add_Product</div>
          <div className="menu-item" onClick={onCustomersTextClick}>Customers</div>
          <div className="menu-item" onClick={onCustomers_DetailsTextClick}>Customer_Details</div>
          <div className="menu-item" onClick={onOrderTextClick}>Order</div>
          <div className="menu-item" onClick={onOrder_DetailsTextClick}>Order_Details</div>
          <div className="menu-item" onClick={onRefundTextClick}>Refund</div>
        </nav>

        <div className="Table">
          <div className="table-section">
            <h2>Most Popular Products</h2>
            <p>New Products in Last Week</p>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sell</th>
                  <th>Status</th>
                  
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="5">Loading...</td></tr>
                ) : (
                  products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.sell}</td>
                      <td>{product.count > 0 ? 'Available' : 'Out of Stock'}</td> 
                     
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="table-section">
            <h2>Earnings Overview</h2>
            <p>Details of Earnings in the Last Week</p>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Item Count</th>
                  <th>Tax</th>
                  <th>Earning</th>
                </tr>
              </thead>
              <tbody>
                {earningData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Date}</td>
                    <td>{item.Item_Count}</td>
                    <td>{item.Tax}</td>
                    <td>{item.Earning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
