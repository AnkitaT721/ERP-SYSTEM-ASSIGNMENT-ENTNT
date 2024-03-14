import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Orders.css";

const Orders = () => {
  // Mock data for orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2024-03-09",
      status: "Pending",
      expectedDeliveryDate: "2024-03-12"
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderDate: "2024-03-08",
      status: "Completed",
      expectedDeliveryDate: "2024-03-11"
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      orderDate: "2024-03-07",
      status: "Processing",
      expectedDeliveryDate: "2024-03-10"
    },
    {
      id: 4,
      customerName: "Bob Johnson",
      orderDate: "2024-03-10",
      status: "Pending",
      expectedDeliveryDate: "2024-03-13"
    },
    {
      id: 5,
      customerName: "David Brown",
      orderDate: "2024-03-11",
      status: "Completed",
      expectedDeliveryDate: "2024-03-14"
    },
    {
      id: 6,
      customerName: "Emily Davis",
      orderDate: "2024-03-12",
      status: "Processing",
      expectedDeliveryDate: "2024-03-15"
    },
    {
      id: 7,
      customerName: "Michael Wilson",
      orderDate: "2024-03-13",
      status: "Pending",
      expectedDeliveryDate: "2024-03-16"
    },
    {
      id: 8,
      customerName: "Jessica Taylor",
      orderDate: "2024-03-15",
      status: "Completed",
      expectedDeliveryDate: "2024-03-18"
    },
    {
      id: 9,
      customerName: "William Martinez",
      orderDate: "2024-03-15",
      status: "Processing",
      expectedDeliveryDate: "2024-03-18"
    },
    {
      id: 10,
      customerName: "Sarah Anderson",
      orderDate: "2024-03-15",
      status: "Pending",
      expectedDeliveryDate: "2024-03-18"
    },
    {
      id: 11,
      customerName: "James Thomas",
      orderDate: "2024-03-18",
      status: "Completed",
      expectedDeliveryDate: "2024-03-21"
    },
    {
      id: 12,
      customerName: "Olivia Harris",
      orderDate: "2024-03-18",
      status: "Processing",
      expectedDeliveryDate: "2024-03-21"
    },
    {
      id: 13,
      customerName: "Daniel Clark",
      orderDate: "2024-03-19",
      status: "Pending",
      expectedDeliveryDate: "2024-03-22"
    },
    {
      id: 14,
      customerName: "Sophia Walker",
      orderDate: "2024-03-20",
      status: "Completed",
      expectedDeliveryDate: "2024-03-23"
    },
    {
      id: 15,
      customerName: "Benjamin Young",
      orderDate: "2024-03-21",
      status: "Processing",
      expectedDeliveryDate: "2024-03-24"
    },
    {
      id: 16,
      customerName: "Ava King",
      orderDate: "2024-03-22",
      status: "Pending",
      expectedDeliveryDate: "2024-03-25"
    },
    {
      id: 17,
      customerName: "Liam Wright",
      orderDate: "2024-03-23",
      status: "Completed",
      expectedDeliveryDate: "2024-03-26"
    },
    {
      id: 18,
      customerName: "Charlotte Lopez",
      orderDate: "2024-03-24",
      status: "Processing",
      expectedDeliveryDate: "2024-03-27"
    },
    {
      id: 19,
      customerName: "Ethan Hill",
      orderDate: "2024-03-25",
      status: "Pending",
      expectedDeliveryDate: "2024-03-28"
    },
    {
      id: 20,
      customerName: "Mia Scott",
      orderDate: "2024-03-25",
      status: "Completed",
      expectedDeliveryDate: "2024-03-28"
    }
]
);

  const [viewType, setViewType] = useState("list"); // State to track the current view type
  const [selectedDateOrders, setSelectedDateOrders] = useState(null); // State to store orders for the selected date

  // Function to delete an order
  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  // Function to update order status
  const updateStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  // Function to handle click on calendar date
  const handleDateClick = (date) => {
    // Format the date to match orderDate format
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    // Filter orders for the clicked date
    const ordersForDate = orders.filter(
      (order) => order.expectedDeliveryDate === formattedDate
    );

    setSelectedDateOrders(ordersForDate);
  };

  // Function to reset selected date orders
  const resetSelectedDateOrders = () => {
    setSelectedDateOrders(null);
  };

  return (
    <div className="orders-management">
      <h2>Orders Management</h2>
      <div className="view-buttons">
        <button onClick={() => setViewType("list")}>List View</button>
        <button onClick={() => setViewType("calendar")}>Calendar View</button>
      </div>
      {viewType === "list" && (
        <div className="orders-list">
          <h3>List View</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.orderDate}</td>
                  <td>
                    <select
                      className="select-status"
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="dlt-btn">
                    <button onClick={() => deleteOrder(order.id)} className="delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {viewType === "calendar" && (
        <div className="calendar-container">
          <h3>Calendar View</h3>
          <Calendar
            onClickDay={handleDateClick} 
            tileContent={({ date }) => {
              const formattedDate = `${date.getFullYear()}-${(
                date.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}-${date
                .getDate()
                .toString()
                .padStart(2, "0")}`;
              const ordersForDate = orders.filter(
                (order) => order.expectedDeliveryDate === formattedDate
              );
              return ordersForDate.length > 0 ? (
                <div>{ordersForDate.length} orders</div>
              ) : null;
            }}
          />
          {selectedDateOrders !== null && selectedDateOrders.length > 0 ? (
            <div className="selected-date-orders">
              <h3>Orders for Selected Date</h3>
              <ul>
                {selectedDateOrders.map((order) => (
                  <li key={order.id}>
                    Order ID: {order.id}, Customer Name: {order.customerName},
                    Status: {order.status}
                  </li>
                ))}
              </ul>
              <button onClick={resetSelectedDateOrders}>Close</button>
            </div>
          ) : (
            <div className="no-orders">
              <p>No orders for selected date</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
