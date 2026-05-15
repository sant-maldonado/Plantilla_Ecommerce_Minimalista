import { features } from '../data/bikes';

export default function Features() {
  return (
    <section id="features" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 mt-2">Compromiso con la calidad en cada detalle</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}