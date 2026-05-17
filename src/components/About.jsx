export default function About() {
  return (
    <section id="nosotros" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Somos una empresa dedicada a la venta de bicicletas de calidad, con más de 10 años de experiencia en el mercado. Nuestro objetivo es acercar a cada cliente la bicicleta perfecta para sus necesidades.
            </p>
            <p className="text-gray-600 mb-6">
              Creemos en la movilidad sustentável y los beneficios de andar en bicicleta. Por eso, ofrezcos un atención personalizada, garantía de calidad y el mejor servicio post-venta.
            </p>
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-gray-900">10+</p>
                <p className="text-sm text-gray-500">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Clientes satisfechos</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Modelos disponibles</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505705693700-95c4b856c0df?w=600&h=500&fit=crop"
              alt="Nuestra tienda"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}