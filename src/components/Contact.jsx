import { useState } from 'react'

const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5493413502389"

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola!%20Soy%20${encodeURIComponent(form.name)}.%0AEmail:%20${encodeURIComponent(form.email)}%0ATel:%20${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`

  return (
    <section id="contacto" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">¿Necesitás ayuda?</h2>
          <p className="text-gray-600 mt-2">Escribinos y te asesoramos personalmente</p>
        </div>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>
          <input
            type="tel"
            placeholder="Tu teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
          />
          <textarea
            placeholder="¿Qué bicis te interesan?"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
          />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Enviar consulta por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}