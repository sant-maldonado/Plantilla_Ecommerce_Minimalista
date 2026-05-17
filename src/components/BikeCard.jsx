export default function BikeCard({ bike, addToCart }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          {bike.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{bike.name}</h3>
        <p className="text-sm text-gray-500 mt-2">{bike.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-gray-900">
            ${bike.price.toLocaleString()}
          </span>
          <button 
            onClick={() => addToCart(bike)}
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}