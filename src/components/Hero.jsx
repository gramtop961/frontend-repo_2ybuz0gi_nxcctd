import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#f8f3ed] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#800000] tracking-tight leading-tight">
            Perfect Fit. Elegant Designs.
            <span className="block text-[#b76e79]">Crafted for Every Occasion.</span>
          </h1>
          <p className="mt-6 text-rose-900/80">
            Welcome to Sumithra Ladies Tailor — where traditional craftsmanship meets modern elegance. From custom saree blouses to bridal couture, we create outfits that feel as good as they look.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#gallery" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#b76e79] text-white hover:brightness-110 transition">Explore Our Designs</a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-rose-300 text-[#800000] hover:bg-rose-50 transition">Our Services</a>
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
          <Spline scene="https://prod.spline.design/r0q0Qwz5pL8q2qaa/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-100/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
