import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import $axios from "../lib/axios.instance";
import ProductCard from "../components/ProductCard";

const BuyerProductList = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["buyer-product list"],
    queryFn: async () => {
      return await $axios.post("product/list/buyer", { page: 1, limit: 10 });
    },
  });
  const productList = data?.data?.productList;
  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",

        justifyContent: "center",
      }}
    >
      {productList.map((item) => {
        return <ProductCard key={item._id} {...item} />;
      })}
    </Box>
  );
};

export default BuyerProductList;
