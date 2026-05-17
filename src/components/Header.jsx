import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" className="text-xl font-semibold text-gray-900">BiciShop</a>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <Link 
          to="/" 
          onClick={() => setTimeout(() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }), 100)}
            className="hover:text-gray-900 transition-colors"
  >
  Catálogo
</Link>
          <Link 
          to="/" 
          onClick={() => setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 100)}
          className="hover:text-gray-900 transition-colors"
>
  Nosotros
</Link>
          <Link 
         to="/" 
          onClick={() => setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100)}
  className="hover:text-gray-900 transition-colors"
>
  Contacto
</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/carrito"
            className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg hover:bg-gray-800 transition-colors"
          >
  Ver Catálogo
</Link>
        </div>
      </div>
    </header>
  );
}