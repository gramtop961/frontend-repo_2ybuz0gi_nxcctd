import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-rose-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#800000]">About Us</h2>
              <p className="mt-4 text-rose-900/80">At Sumithra Ladies Tailor (SLT), we bring decades of experience in women’s fashion — blending timeless techniques with modern silhouettes. From saree blouses and lehengas to gowns and salwar sets, every piece is tailored to your measurements and occasion.</p>
              <p className="mt-3 text-rose-900/80">We celebrate precision, handcrafted finishes, and the beauty of Indian textiles. Our studio in Karnataka is where ideas are sketched, fabrics are cut, and dreams are stitched with care.</p>
            </div>
            <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1593030668930-8130abedb5da?q=80&w=1200&auto=format&fit=crop"
                alt="Tailor at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-100/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
