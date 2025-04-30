import React, { useState } from "react";

import Navbar from "./Navbar";
import {ProductCard} from './ProductCard'
import { Sidebar } from "./SideFilter";
import {productsData} from '../data/ProductData'
import {Pagination} from './Pagination'
import SearchProduct from './SearchProduct'

const PRODUCTS_PER_PAGE = 8;




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
          <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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
