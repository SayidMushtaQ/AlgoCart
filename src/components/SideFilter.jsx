
export const Sidebar = () => (
  <aside className="w-64 h-full border-r rounded-md bg-white shadow-md hidden md:block mt-45">
    <div className="h-full p-4 overflow-y-auto scrollbar-hide">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brand</h3>
        {['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Realme'].map(brand => (
          <label key={brand} className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            {brand}
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Range</h3>
        {['Under ₹10,000', '₹10,000 - ₹20,000', '₹20,000 - ₹30,000', '₹30,000 & above'].map(price => (
          <label key={price} className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            {price}
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">RAM</h3>
        {['4GB', '6GB', '8GB', '12GB'].map(ram => (
          <label key={ram} className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            {ram}
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Storage</h3>
        {['64GB', '128GB', '256GB', '512GB'].map(storage => (
          <label key={storage} className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            {storage}
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Battery</h3>
        {['3000mAh+', '4000mAh+', '5000mAh+'].map(battery => (
          <label key={battery} className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            {battery}
          </label>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Customer Ratings</h3>
        {[4, 3, 2, 1].map(rating => (
          <label key={rating} className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            {rating}★ & above
          </label>
        ))}
      </div>
    </div>
  </aside>
);
