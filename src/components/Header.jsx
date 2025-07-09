import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import LogoutConfirmationDialog from "./LogoutConfirmationDialog";

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
      <header className="bg-green-700 text-white shadow-md sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold cursor-pointer tracking-wide"
            onClick={() => navigate("/home")}
          >
            ProFitness Store
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6">
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
          </nav>

          {/* Logout Button */}
          <div className="hidden sm:block">
            <LogoutConfirmationDialog />
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden" onClick={handleToggle}>
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
                className={`text-left text-gray-800 hover:text-green-700 transition font-medium ${
                  location.pathname === item.path
                    ? "font-bold text-green-700 underline"
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
