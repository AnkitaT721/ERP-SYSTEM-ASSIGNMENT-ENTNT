import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="metrics">
          <div className="metric">
            <h3>Total Products</h3>
            <p>{products.length}</p>
          </div>
          <div className="metric">
            <h3>Total Orders</h3>
            <p>20</p>
          </div>
        </div>
        <div className="navigation">
          <Link to="/products" className="button">
            <button>Products Management</button>
          </Link>
          <Link to="/orders" className="button">
            <button>Orders Management</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
