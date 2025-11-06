import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya',
    text: 'My bridal blouse fit like a dream. The hand embroidery was exquisite! Truly premium experience.',
  },
  {
    name: 'Shreya',
    text: 'Got my lehenga altered perfectly in time for the wedding. Professional and friendly!',
  },
  {
    name: 'Meera',
    text: 'They understood exactly what I wanted. The gown was elegant and comfortable.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#800000]">What Clients Say</h2>
          <p className="mt-3 text-rose-900/80">A few words from happy customers.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-rose-100 bg-rose-50/40 shadow-sm">
              <div className="flex items-center gap-1 text-[#b76e79] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#b76e79" className="text-[#b76e79]" />
                ))}
              </div>
              <p className="text-rose-900/90">“{t.text}”</p>
              <p className="mt-4 text-sm font-semibold text-rose-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
