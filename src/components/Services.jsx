import React from 'react';
import { Scissors, Sparkles, Needle, Gem, Wand2, Ruler } from 'lucide-react';

const services = [
  {
    title: 'Saree & Blouse Designing',
    desc: 'Traditional to contemporary blouse cuts with perfect finishing and lining.',
    icon: Needle,
    image: 'https://images.unsplash.com/photo-1701252068382-fbe79b926cdc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXJlZSUyMCUyNiUyMEJsb3VzZSUyMERlc2lnbmluZ3xlbnwwfDB8fHwxNzYyNDE5MTE5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Bridal Wear',
    desc: 'Custom bridal lehengas and blouses with hand embroidery and zari work.',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Party Gowns',
    desc: 'Elegant gowns tailored to your measurements and style preferences.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Embroidery (Hand & Machine)',
    desc: 'Delicate handwork, aari, and machine embroidery to elevate your outfit.',
    icon: Wand2,
    image: 'https://images.unsplash.com/photo-1680034976848-d9fe95466aba?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWJyb2lkZXJ5JTIwJTI4SGFuZCUyMCUyNiUyME1hY2hpbmUlMjl8ZW58MHwwfHx8MTc2MjQxOTEyM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Alterations & Custom Fit',
    desc: 'Precision alterations for sarees, suits, lehengas, and gowns.',
    icon: Ruler,
    image: 'https://images.unsplash.com/photo-1650100178700-78995f80e311?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbHRlcmF0aW9ucyUyMCUyNiUyMEN1c3RvbSUyMEZpdHxlbnwwfDB8fHwxNzYyNDE5MTI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Zari & Finishing',
    desc: 'Beautiful finishing touches including piping, tassels, and zari borders.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1605207081293-3a7443b56a7a?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#800000]">Our Services</h2>
          <p className="mt-3 text-rose-900/80">Crafted with care, tailored to perfection.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon, image }) => (
            <div key={title} className="group rounded-2xl overflow-hidden border border-rose-100 bg-rose-50/40 hover:bg-rose-50 transition shadow-sm">
              <div className="h-40 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-[#f8f3ed] text-[#b76e79]">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-semibold text-rose-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-rose-900/80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
