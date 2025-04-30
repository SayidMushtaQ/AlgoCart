export const productsData = new Array(30).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Mobile Phone ${i + 1}`,
    price: Math.floor(Math.random() * 50000) + 5000,
    image: `https://via.placeholder.com/200x200?text=Phone+${i + 1}`,
  }));