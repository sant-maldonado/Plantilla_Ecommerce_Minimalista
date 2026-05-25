import { Link } from 'react-router-dom'

export default function BikeCard({ bike }) {
  return (
    <Link to={`/bici/${bike.id}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block">
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
          <span className="text-sm font-medium text-gray-900 border border-gray-300 rounded-full px-4 py-1.5 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300">
            Ver más <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}