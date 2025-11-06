import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f8f3ed] border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="inline-flex items-center gap-3">
            <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-[#b76e79] text-white font-semibold tracking-wider shadow-sm">SLT</span>
            <div>
              <div className="text-[#800000] font-serif text-lg leading-5">Sumithra Ladies Tailor</div>
              <p className="text-xs text-rose-700/70">Traditional Craft • Modern Fit</p>
            </div>
          </div>
          <p className="mt-4 text-rose-900/80 max-w-prose">Exclusive tailor shop for women in Karnataka. We specialize in sarees, bridal wear, gowns, salwar kameez, lehengas, and fine embroidery.</p>
        </div>
        <div className="md:text-right space-y-3">
          <div className="flex md:justify-end gap-3">
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-rose-200 text-rose-900 hover:bg-rose-50"><Instagram size={18} /></a>
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-rose-200 text-rose-900 hover:bg-rose-50"><Facebook size={18} /></a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:brightness-110"><MessageCircle size={18} /></a>
          </div>
          <p className="text-xs text-rose-700/70">© 2025 Sumithra Ladies Tailor — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
