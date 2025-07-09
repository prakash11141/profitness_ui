import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures full screen height
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1, // Pushes footer to bottom when content is short
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // You can use "center" if you want vertical center
          px: 2,
          py: 4,
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
