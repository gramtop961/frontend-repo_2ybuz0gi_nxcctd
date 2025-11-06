import React, { useState } from 'react';

const categories = ['All', 'Sarees', 'Bridal', 'Handwork', 'Western'];

const images = [
  { url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format&fit=crop', cat: 'Sarees' },
  { url: 'https://images.unsplash.com/photo-1610030469973-a1fc517fabd0?q=80&w=1200&auto=format&fit=crop', cat: 'Bridal' },
  { url: 'https://images.unsplash.com/photo-1620799139535-99b4f44ae6c7?q=80&w=1200&auto=format&fit=crop', cat: 'Handwork' },
  { url: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop', cat: 'Western' },
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop', cat: 'Sarees' },
  { url: 'https://images.unsplash.com/photo-1604335399105-a0d7a62fe944?q=80&w=1200&auto=format&fit=crop', cat: 'Bridal' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? images : images.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="py-16 bg-[#f8f3ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#800000]">Gallery</h2>
          <p className="mt-3 text-rose-900/80">Explore our craftsmanship across occasions.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                active === cat
                  ? 'bg-[#b76e79] border-[#b76e79] text-white'
                  : 'bg-white border-rose-200 text-rose-900 hover:bg-rose-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-sm">
              <img src={img.url} alt={img.cat} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
