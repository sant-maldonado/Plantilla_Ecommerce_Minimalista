export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">BiciShop</h1>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#catalogo" className="hover:text-gray-900 transition-colors">Catálogo</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-gray-900 transition-colors">Contacto</a>
        </nav>
        <a
          href="#catalogo"
          className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-800 transition-colors"
        >
          Ver Catálogo
        </a>
      </div>
    </header>
  );
}