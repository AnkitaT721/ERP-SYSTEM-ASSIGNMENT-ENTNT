import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [productName, setProductName] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductStockChange = (event) => {
    setProductStock(event.target.value);
  };

  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  // Function to add a new product
  const addProduct = () => {
    const newProduct = {
      id: Math.random().toString(36).substring(2, 9),
      name: productName,
      category: productCategory,
      price: productPrice,
      quantity: productStock,
    };
    setProducts([...products, newProduct]);
    // Reset input fields after adding product
    setProductName("");
    setProductStock(0);
    setProductCategory("");
    setProductPrice(0);
  };

  const AddToggle = () => {
    setOpen(!open);
  };

  // Function to edit a product
  const editProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setProductName(productToEdit.name);
      setProductStock(productToEdit.quantity);
      setProductCategory(productToEdit.category);
      setProductPrice(productToEdit.price);
      setEditProductId(productId);
      setOpen(true);
    }
  };

  // Function to save updated product
  const saveUpdateHandler = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) =>
      product.id === editProductId
        ? {
            ...product,
            name: productName,
            category: productCategory,
            price: productPrice,
            quantity: productStock,
          }
        : product
    );
    setProducts(updatedProducts);
    setOpen(false);
    window.location.reload();
  };

  // Function to delete a product
  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  // Save products to localStorage whenever the products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <div className="products-management">
        <h2>Products Management</h2>

        <div className="product-form">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={handleProductNameChange}
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            value={productStock}
            onChange={handleProductStockChange}
          />
          <input
            type="text"
            placeholder="Product Category"
            value={productCategory}
            onChange={handleProductCategoryChange}
          />
          <input
            type="number"
            placeholder="Price"
            value={productPrice}
            onChange={handleProductPriceChange}
          />
          
        </div>
        <button className="add-product-btn" onClick={addProduct}>Add Product</button>

        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Stock Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td className="actions">
                  <button onClick={() => editProduct(product.id)}>Edit</button>
                  <button onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Dialog
          aria-labelledby="Simple-dialog-title"
          open={open}
          onClose={AddToggle}
        >
          <form onSubmit={saveUpdateHandler} id="updateForm">
            <DialogTitle>Update Product Details</DialogTitle>
            <DialogContent className="submitDialogActions">
              <table className="custom-table">
                <tr>
                  <th className="table-header">Name</th>
                  <th className="table-header">Category</th>
                  <th className="table-header">Stock Quantity</th>
                  <th className="table-header">Price</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={productName}
                      onChange={handleProductNameChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={productCategory}
                      onChange={handleProductCategoryChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={productStock}
                      onChange={handleProductStockChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={productPrice}
                      onChange={handleProductPriceChange}
                    />
                  </td>
                </tr>
              </table>
            </DialogContent>
            <DialogActions>
              <Button onClick={AddToggle} color="secondary">
                Close
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </>
  );
};

export default Products;
