import BikeCard from './BikeCard';
import { bikes } from '../data/bikes';

export default function BikeGrid() {
  return (
    <section id="catalogo" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Nuestro Catálogo</h2>
          <p className="text-gray-600 mt-2">Las mejores marcas, los mejores precios</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
}