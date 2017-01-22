const loadProducts = () => {
  const products = [
    { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
    { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
    { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
  ];

  return { type: "REPLACE_PRODUCTS", products: products };
};

const addToCart = (product) => {
  return { type: "ADD_TO_CART", product };
};

const removeFromCart = (product) => {
  return { type: "REMOVE_FROM_CART", product };
};

export { loadProducts, addToCart, removeFromCart };
