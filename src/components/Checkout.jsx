import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [step, setStep] = useState(1);
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCheckout = () => {
    const products = cart.map(p => `${p.name} - $${p.price.toLocaleString()}`).join("%0A");
    const message = `Hola! Soy ${customer.name}.%0AMi Tel: ${customer.phone}%0A%0AQuiero comprar:%0A${products}%0A%0ATotal: $${total.toLocaleString()}`;
    const url = `https://wa.me/5493413502389?text=${message}`;
    window.open(url, "_blank");
    clearCart();
  };

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">No hay bicis en el carrito.</p>
            <Link to="/" className="text-gray-900 underline">Volver al catálogo</Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Resumen del Carrito</h2>
                <div className="space-y-3 mb-6">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium">${item.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
                <button 
                  onClick={handleNext} 
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                >
                  Continuar
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Datos de Contacto</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                  <input
                    type="email"
                    placeholder="Tu email (opcional)"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                </form>
                <div className="flex gap-4 mt-6">
                  <button 
                    onClick={handleBack} 
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
                  >
                    Atrás
                  </button>
                  <button 
                    onClick={handleNext} 
                    disabled={!customer.name || !customer.phone}
                    className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Confirmar Pedido</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="mb-2"><strong>Nombre:</strong> {customer.name}</p>
                  <p className="mb-2"><strong>Teléfono:</strong> {customer.phone}</p>
                  {customer.email && <p><strong>Email:</strong> {customer.email}</p>}
                </div>
                <div className="space-y-2 mb-6">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name}</span>
                      <span>${item.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={handleBack} 
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
                  >
                    Atrás
                  </button>
                  <button 
                    onClick={handleCheckout} 
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                  >
                    Enviar Pedido
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Checkout;