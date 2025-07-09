import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SellerProductList = () => {
  const navigate = useNavigate();
  const goToAddProduct = () => {
    navigate("/add-product");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // stack vertically
        alignItems: "center", // center horizontally
        mt: 4, // margin from top
        gap: 2, // spacing between title and button
      }}
    >
      <Typography variant="h4">Product List</Typography>
      <Button variant="contained" color="success" onClick={goToAddProduct}>
        Add Product
      </Button>
    </Box>
  );
};

export default SellerProductList;
