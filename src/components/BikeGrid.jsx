import { useContext, useState } from 'react';
import BikeCard from './BikeCard';
import { bikes } from '../data/bikes';
import { CartContext } from '../context/CartContext';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'Urbana', label: 'Urbana' },
  { id: 'Montaña', label: 'Montaña' },
  { id: 'Carretera', label: 'Carretera' },
  { id: 'Fija', label: 'Fija' },
];

export default function BikeGrid() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredBikes = activeCategory === 'todos' 
    ? bikes 
    : bikes.filter(bike => bike.category === activeCategory);

  return (
    <section id="catalogo" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">Nuestro Catálogo</h2>
          <p className="text-gray-600 mt-2">Las mejores marcas, los mejores precios</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} addToCart={addToCart} />
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No hay bicis en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}