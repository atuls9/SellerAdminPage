import React, { useState } from "react";

const ProductDetails = (props) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [sellingPcice, setSellingPcice] = useState("");

  const productIdHandler = (e) => {
    setProductId(e.target.value);
  };
  const productNameHandler = (e) => {
    setProductName(e.target.value);
  };
  const sellingPciceHandler = (e) => {
    setSellingPcice(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.addProduct(productId, productName, sellingPcice);
    setProductId("");
    setProductName("");
    setSellingPcice("");
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="productId">Product ID</label>
      <input type="number" onChange={productIdHandler} value={productId} />
      <label htmlFor="productName">Product Name</label>
      <input type="text" onChange={productNameHandler} value={productName} />
      <label htmlFor="productPrice">Selling Price</label>
      <input
        type="number"
        onChange={sellingPciceHandler}
        value={sellingPcice}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductDetails;
