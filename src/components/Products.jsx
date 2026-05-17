import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { name: "Vestido Blanco", price: "$7.500", img: "https://source.unsplash.com/400x400/?dress" },
  { name: "Camisa Denim", price: "$6.200", img: "https://source.unsplash.com/400x400/?shirt" },
  { name: "Pantalón Elegante", price: "$8.900", img: "https://source.unsplash.com/400x400/?pants" },
  { name: "Zapatillas Urbanas", price: "$5.500", img: "https://source.unsplash.com/400x400/?sneakers" },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="py-16 px-8 text-center">
      <h3 className="text-3xl font-semibold mb-8">Productos Destacados</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white shadow rounded p-4 hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="rounded mb-4" />
            <h4 className="font-medium">{p.name}</h4>
            <p className="text-gray-600">{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
