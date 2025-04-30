import React from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchProduct({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-ful mb-20 mt-10 mr-25">
      <div className="flex items-center max-w-3xl mx-auto bg-white">
        <input
          type="text"
          placeholder="Search mobiles..."
          className="flex-grow border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-[12.5px] rounded-r-md cursor-pointer">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
