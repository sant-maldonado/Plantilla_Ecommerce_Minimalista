import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const message = cart.map(p => `${p.name} - $${p.price.toLocaleString()}`).join("%0A");
    const url = `https://wa.me/5493413502389?text=Hola! Quiero comprar:%0A${message}%0A%0ATotal: $${total.toLocaleString()}`;
    window.open(url, "_blank");
    clearCart();
  };

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">No hay bicis en el carrito.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-lg font-semibold text-gray-900">${item.price.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-xl font-semibold text-gray-900">Total: ${total.toLocaleString()}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Finalizar Compra por WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full text-gray-500 hover:text-gray-700 text-sm"
            >
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;