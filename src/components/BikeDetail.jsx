import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'

const reviews = [
  { name: "Carlos M.", rating: 5, comment: "Excelente calidad, superó mis expectativas. Muy recomendable." },
  { name: "Lucía P.", rating: 5, comment: "La compré hace 3 meses y anda perfecta. Muy buena relación precio-calidad." },
  { name: "Gastón R.", rating: 4, comment: "Buena bici para empezar. Cómoda y ligera." }
]

export default function BikeDetail() {
  const { id } = useParams()
  const { products } = useProducts()
  const { addToCart } = useContext(CartContext)

  const bike = products.find(p => p.id === Number(id))

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Bici no encontrada.</p>
      </div>
    )
  }

  const similarBikes = products.filter(p => p.category === bike.category && p.id !== bike.id).slice(0, 3)

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm mb-6 inline-block">← Volver al catálogo</Link>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
            <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-2">{bike.category}</span>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{bike.name}</h1>
            <p className="text-gray-600 mb-6">{bike.description}</p>
            <p className="text-3xl font-bold text-gray-900 mb-6">${bike.price.toLocaleString()}</p>
            <button
              onClick={() => addToCart(bike)}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto text-center"
            >
              Agregar al carrito
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Reseñas de clientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">"{review.comment}"</p>
                <p className="text-sm font-medium text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>

        {similarBikes.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">También te puede interesar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarBikes.map(b => (
                <Link key={b.id} to={`/bici/${b.id}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img src={b.image} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{b.name}</h3>
                    <p className="text-gray-900 font-semibold mt-1">${b.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}