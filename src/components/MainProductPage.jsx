import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Navbar from "./Navbar";
import { Sidebar } from "./SideFilter";
const productsData = new Array(30).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Mobile Phone ${i + 1}`,
  price: Math.floor(Math.random() * 50000) + 5000,
  image: `https://via.placeholder.com/200x200?text=Phone+${i + 1}`,
}));

const PRODUCTS_PER_PAGE = 9;

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-md"
    />
    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    <p className="text-gray-600">₹{product.price}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
      Add to Cart
    </button>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-6 space-x-2">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`px-3 py-1 rounded ${
          currentPage === i + 1
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

const MainProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="w-ful mb-20 mt-10 mr-25">
            <div className="flex items-center max-w-3xl mx-auto bg-white">
              <input
                type="text"
                placeholder="Search mobiles..."
                className="flex-grow border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-4 py-[13px] rounded-r-md cursor-pointer">
                <FaSearch />
              </button>
            </div>
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
};

export default MainProductPage;
