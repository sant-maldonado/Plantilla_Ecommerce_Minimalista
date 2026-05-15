import Header from './components/Header';
import Hero from './components/Hero';
import BikeGrid from './components/BikeGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <BikeGrid />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;