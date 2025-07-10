import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import LogoutConfirmationDialog from "./LogoutConfirmationDialog";
import logo from "../assets/profitnesslogo.jpg"; // Adjust path if needed

const navItems = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "Product", path: "/products" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "About", path: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* AppBar */}
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center h-16 sm:h-20">
          {/* Logo on the left */}
          <div
            className="h-full flex items-center cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <img
              src={logo}
              alt="ProFitness Logo"
              className="h-full aspect-square object-cover rounded-full border-2 border-white"
            />
          </div>

          {/* Desktop Nav pushed to right */}
          <div className="hidden sm:flex items-center space-x-6 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`text-white hover:text-yellow-300 transition font-medium ${
                  location.pathname === item.path
                    ? "font-bold underline text-yellow-300"
                    : ""
                }`}
              >
                {item.name}
              </button>
            ))}

            <LogoutConfirmationDialog />
          </div>

          {/* Mobile Menu Button (only shows on small screens) */}
          <button className="sm:hidden ml-auto" onClick={handleToggle}>
            <MenuIcon className="text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden bg-white shadow-md fixed top-16 left-0 right-0 z-40 border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setMobileOpen(false);
                }}
                className={`text-left text-gray-800 hover:text-blue-700 transition font-medium ${
                  location.pathname === item.path
                    ? "font-bold text-blue-700 underline"
                    : ""
                }`}
              >
                {item.name}
              </button>
            ))}
            <LogoutConfirmationDialog />
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
