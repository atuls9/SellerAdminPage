import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Check, Delete } from "@mui/icons-material";

const Product = (props) => {
  const removeItem = () => {
    props.removeProduct(props.id);
  };
  return (
    <Box
      width="400px"
      bgcolor="rgb(0, 255, 255)"
      mt={1}
      borderRadius={4}
      mx="auto"
    >
      <List>
        <ListItem disablePadding disableGutters>
          <ListItemButton>
            <IconButton disabled style={{ margin: "auto" }}>
              <Check style={{ color: "green" }} />
            </IconButton>
            <ListItemText
              primary={`Product Name: ${props.name}    `}
              secondary={`Selling Price: ${props.price}`}
            />
          </ListItemButton>
          <IconButton style={{ float: "right" }} onClick={removeItem}>
            <Delete style={{ color: "red" }} />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Product;
