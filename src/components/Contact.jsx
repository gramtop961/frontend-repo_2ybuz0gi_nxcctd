import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#800000]">Contact Us</h2>
          <p className="mt-3 text-rose-900/80">We'd love to stitch something special for you.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form className="space-y-4 p-6 rounded-2xl border border-rose-100 bg-rose-50/40 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-[#b76e79]" placeholder="Name" />
              <input className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-[#b76e79]" placeholder="Phone" />
            </div>
            <input className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-[#b76e79]" placeholder="Email" />
            <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-[#b76e79]" placeholder="Message"></textarea>
            <button type="button" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#800000] text-white hover:bg-[#9a1212] transition">Send Message</button>
          </form>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-rose-100 bg-rose-50/40 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#b76e79]" size={20} />
                <div>
                  <h3 className="font-semibold text-rose-900">Address</h3>
                  <p className="text-rose-900/80">Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <Phone className="text-[#b76e79]" size={20} />
                <div>
                  <h3 className="font-semibold text-rose-900">Phone</h3>
                  <p className="text-rose-900/80">+91 99999 99999</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <Mail className="text-[#b76e79]" size={20} />
                <div>
                  <h3 className="font-semibold text-rose-900">Email</h3>
                  <p className="text-rose-900/80">hello@slt-tailor.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-rose-100 shadow-sm">
              <iframe
                title="SLT Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0578849664304!2d76.6393802!3d12.2958102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f6e6a6a0e0f%3A0x4a7a0a0a0a0a0a0!2sKarnataka%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 text-rose-900 hover:bg-rose-50">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 text-rose-900 hover:bg-rose-50">
                <Facebook size={18} /> Facebook
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white hover:brightness-110">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </section>
  );
}
