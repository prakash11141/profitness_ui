import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6 text-center">
        Welcome to ProFitness Store
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl text-center">
        We offer a wide range of fitness products including equipment, apparel,
        and supplements to help you achieve your fitness goals.
      </p>

      <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md mb-4"
        onClick={() => navigate("/about")}
      >
        About Us
      </button>

      <Link
        to="/contact"
        className="text-green-600 hover:underline text-base font-medium"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Home;
