import { Button } from "@mui/material";
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
      <label htmlFor="productId" style={{ color: "white", fontWeight: "bold" }}>
        Product ID{" "}
      </label>
      <input
        type="number"
        onChange={productIdHandler}
        value={productId}
        style={{ height: "25px" }}
      />{" "}
      <label
        htmlFor="productName"
        style={{ color: "white", fontWeight: "bold" }}
      >
        Product Name{" "}
      </label>
      <input
        type="text"
        onChange={productNameHandler}
        value={productName}
        style={{ height: "25px" }}
      />{" "}
      <label
        htmlFor="productPrice"
        style={{ color: "white", fontWeight: "bold" }}
      >
        Selling Price{" "}
      </label>
      <input
        type="number"
        onChange={sellingPciceHandler}
        value={sellingPcice}
        style={{ height: "25px" }}
      />
      {"  "}
      <Button type="submit" variant="contained" size="small" color="secondary">
        Add Product
      </Button>
      {/* <button type="submit">Add Product</button> */}
    </form>
  );
};

export default ProductDetails;
