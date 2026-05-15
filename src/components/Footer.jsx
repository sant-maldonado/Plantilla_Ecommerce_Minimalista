export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">BiciShop</h3>
          <p className="text-gray-400 text-sm">
            Tu tienda de confianza para bicicletas de calidad.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Enlaces</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Horario</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Lun - Vie: 9:00 - 19:00</li>
            <li>Sáb: 9:00 - 14:00</li>
            <li>Dom: Cerrado</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Contacto</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>info@bicishop.com</li>
            <li>+54 11 1234-5678</li>
            <li>Av. Principal 123, Ciudad</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        © 2026 BiciShop. Todos los derechos reservados.
      </div>
    </footer>
  );
}