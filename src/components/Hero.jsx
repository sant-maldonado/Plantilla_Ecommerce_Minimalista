export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            Las mejores bicicletas
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Encuentra tu bicicleta perfecta
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Amplio catálogo de bicicletas urbanas, de montaña y carretera.
            Calidad garantizada y precios justos.
          </p>
          <div className="flex gap-4">
            <a
              href="#catalogo"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Ver Catálogo
            </a>
            <a
              href="#contacto"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Contactar
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop"
            alt="Bicicleta urbana"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}