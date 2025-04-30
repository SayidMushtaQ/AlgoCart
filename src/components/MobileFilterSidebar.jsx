import React from 'react';

const MobileFilterSidebar = () => {
  return (
    <aside style={{scrollbarWidth: 'none'}} className="w-64 max-h-screen p-4 border-r bg-white shadow-md overflow-x-scroll">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brand</h3>
        <div className="space-y-1">
          {['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Realme'].map(brand => (
            <label key={brand} className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="space-y-1">
          {[
            'Under ₹10,000',
            '₹10,000 - ₹20,000',
            '₹20,000 - ₹30,000',
            '₹30,000 & above'
          ].map(price => (
            <label key={price} className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* RAM Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">RAM</h3>
        <div className="space-y-1">
          {['4GB', '6GB', '8GB', '12GB'].map(ram => (
            <label key={ram} className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{ram}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Storage Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Storage</h3>
        <div className="space-y-1">
          {['64GB', '128GB', '256GB', '512GB'].map(storage => (
            <label key={storage} className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{storage}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Battery Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Battery</h3>
        <div className="space-y-1">
          {['3000mAh+', '4000mAh+', '5000mAh+'].map(battery => (
            <label key={battery} className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{battery}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ratings Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Customer Ratings</h3>
        <div className="space-y-1">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{rating}★ & above</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MobileFilterSidebar;
