export default function Contact() {
  return (
    <section id="contacto" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">¿Necesitás ayuda?</h2>
          <p className="text-gray-600 mt-2">Escribinos y te asesoramos personalmente</p>
        </div>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>
          <input
            type="tel"
            placeholder="Tu teléfono"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
          />
          <textarea
            placeholder="¿Qué bicis te interesan?"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Enviar consulta
          </button>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Enviar whatsapp
          </button>
        </form>
      </div>
    </section>
  );
}