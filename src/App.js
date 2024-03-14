import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Home/Dashboard.js";
import Products from "./component/Products/Products.js";
import Orders from "./component/Orders/Orders.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
