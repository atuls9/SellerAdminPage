import React, { useState } from "react";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { Box, List, ListItem, ListItemText } from "@mui/material";

function App() {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState("0");

  const addProduct = (id, name, price) => {
    if (id === "" || name === "" || price === "") {
      return;
    }
    const newProduct = {
      id: id,
      productName: name,
      sellingPrice: price,
    };
    setProductList([...productList, newProduct]);
    localStorage.setItem(newProduct.id, JSON.stringify(newProduct));
    setTotal(+total + +newProduct.sellingPrice);
  };

  const removeProduct = (id) => {
    setProductList(
      productList.filter((product) => {
        if (id === product.id) {
          setTotal(+total - +product.sellingPrice);
        }
        return id !== product.id;
      })
    );
    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      <ProductDetails addProduct={addProduct} />

      <Box
        width="400px"
        bgcolor="rgb(244, 189, 86)"
        mt={1}
        borderRadius={4}
        mx="auto"
        ml="35%"
      >
        <List>
          <ListItem style={{ marginLeft: "30%" }}>
            <ListItemText
              style={{ fontWeight: "bolder" }}
              primary={`Total Cost = ₹ ${total}`}
            />
          </ListItem>
        </List>
      </Box>

      <ProductList list={productList} removeProduct={removeProduct} />
    </div>
  );
}

export default App;
