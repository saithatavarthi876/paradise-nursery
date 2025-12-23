import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantData = [
  {
    category: "Foliage Plants",
    plants: [
      { id: 1, name: "Monstera Deliciosa", price: 25, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80" },
      { id: 2, name: "Pothos", price: 15, image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
      { id: 3, name: "Philodendron", price: 18, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
      { id: 4, name: "Calathea", price: 22, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80" },
      { id: 5, name: "Fiddle Leaf Fig", price: 30, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
      { id: 6, name: "ZZ Plant", price: 20, image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
      { id: 8, name: "Echeveria", price: 10, image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" },
      { id: 9, name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
      { id: 10, name: "Haworthia", price: 11, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
      { id: 11, name: "String of Pearls", price: 16, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80" },
      { id: 12, name: "Burro's Tail", price: 13, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  {
    category: "Flowering Plants",
    plants: [
      { id: 13, name: "Peace Lily", price: 19, image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80" },
      { id: 14, name: "African Violet", price: 17, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
      { id: 15, name: "Anthurium", price: 21, image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" },
      { id: 16, name: "Kalanchoe", price: 15, image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
      { id: 17, name: "Bromeliad", price: 23, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
      { id: 18, name: "Orchid", price: 28, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [added, setAdded] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAdded((prev) => [...prev, plant.id]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shop Plants</h2>
      {plantData.map((cat) => (
        <div key={cat.category} style={{ marginBottom: "2rem" }}>
          <h3>{cat.category}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {cat.plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, width: 180, background: "#fff" }}>
                <img src={plant.image} alt={plant.name} style={{ width: "100%", height: 100, objectFit: "cover", borderRadius: 6 }} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAdd(plant)}
                  disabled={cartItems.some((item) => item.id === plant.id) || added.includes(plant.id)}
                  style={{ background: "#388e3c", color: "#fff", border: "none", borderRadius: 4, padding: "0.5rem 1rem", cursor: "pointer" }}
                >
                  {cartItems.some((item) => item.id === plant.id) || added.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
