import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BikeGrid from "./components/BikeGrid";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

function AppContent() {
  const currentPath = window.location.pathname
  const isAdmin = currentPath === '/admin'

  return (
    <>
      {!isAdmin && <Header />}
      <Routes>
        <Route path="/" element={<><Hero /><BikeGrid /><About /><Features /><Testimonials /><Contact /></>} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!isAdmin && <Footer />}
    </>
  )
}

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;