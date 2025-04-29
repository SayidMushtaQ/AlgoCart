import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-bold text-blue-600">🛒 AlgoCart</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a> 
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Analytics</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600 transition text-xl cursor-pointer">
            <FaShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
