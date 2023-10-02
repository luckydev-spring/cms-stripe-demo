export async function fetchProducts() {
  return [
    {
      id: "prod_1",
      name: "Modern Chair",
      price: 12000,
      image: "/chair.jpg",
      description: "A comfortable modern chair.",
    },
    {
      id: "prod_2",
      name: "Stylish Lamp",
      price: 4500,
      image: "/lamp.jpg",
      description: "Perfect for your desk or bedside.",
    },
  ]
}