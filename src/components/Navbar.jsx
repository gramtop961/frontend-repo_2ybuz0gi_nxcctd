import React from 'react';
import { Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToId('home')}
          className="group inline-flex items-center gap-2"
          aria-label="SLT - Sumithra Ladies Tailor"
        >
          <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-[#b76e79] text-white font-semibold tracking-wider shadow-sm">SLT</span>
          <div className="text-left">
            <div className="text-[#800000] font-serif text-lg leading-5">Sumithra Ladies Tailor</div>
            <div className="text-xs text-rose-700/70 leading-4">Traditional Craft • Modern Fit</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-sm text-rose-900/80 hover:text-[#800000] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href="tel:+919999999999"
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white bg-[#800000] hover:bg-[#9a1212] px-4 py-2 rounded-full shadow-sm transition-colors"
        >
          <Phone size={16} /> Call Now
        </a>
      </div>
    </header>
  );
}
