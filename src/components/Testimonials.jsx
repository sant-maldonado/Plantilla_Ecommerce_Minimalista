import { testimonials } from '../data/bikes';

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}