import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  return (
    <ul>
      {props.list.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.productName}
            price={product.sellingPrice}
            removeProduct={props.removeProduct}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
