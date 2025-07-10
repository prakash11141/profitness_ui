import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import shuax3 from "../assets/shuax3.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${shuax3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-white bg-opacity-70" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        <Typography
          variant="h3"
          className="!text-blue-700 !font-extrabold mb-6 w-full"
        >
          Welcome to ProFitness Store
        </Typography>

        <Typography
          variant="body1"
          className="!text-gray-700 !text-lg sm:!text-xl mb-8 w-full"
        >
          We offer a wide range of fitness products including equipment,
          apparel, and supplements to help you achieve your fitness goals.
        </Typography>

        <Button
          variant="contained"
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            borderRadius: "12px",
            fontWeight: 600,
            boxShadow: 3,
            mb: 2,
            textTransform: "none",
            backgroundColor: "#1d4ed8", // blue-700
            "&:hover": {
              backgroundColor: "#1e40af", // blue-800
            },
          }}
          onClick={() => navigate("/about")}
        >
          About Us
        </Button>

        <Link
          to="/contact"
          className="text-blue-700 hover:text-blue-800 underline font-medium text-base transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
