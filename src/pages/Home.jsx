import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2">This is Home page</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          navigate("/about");
        }}
      >
        about page
      </Button>
      <Link to="contact">Go to contact</Link>
    </Box>
  );
};

export default Home;
