import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='absolute right-0 top-8'>
      <div className="text-2xl text-gray-700 cursor-pointer relative right-20">
        <FaShoppingCart />
        {/* Optional: Badge */}
        {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span> */}
      </div>
    </nav>
  );
};

export default Navbar;
