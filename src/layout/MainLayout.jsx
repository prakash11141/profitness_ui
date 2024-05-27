import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Box
      sx={{
        // width: "100vw",
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      <Header />
      <Box
        sx={{
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
