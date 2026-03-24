import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-nude-100 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif tracking-[0.3em] uppercase">Dimitra</span>
            <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 -mt-1">Gerontzos</span>
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
            Premium makeup and hair artistry specializing in bridal and luxury events. Creating timeless beauty for your most precious moments.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-nude-100 hover:text-stone-900 transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-nude-100 hover:text-stone-900 transition-all duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-stone-400 hover:text-white text-sm transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="text-stone-400 hover:text-white text-sm transition-colors">Services & Pricing</Link></li>
            <li><Link to="/portfolio" className="text-stone-400 hover:text-white text-sm transition-colors">Portfolio</Link></li>
            <li><Link to="/testimonials" className="text-stone-400 hover:text-white text-sm transition-colors">Testimonials</Link></li>
            <li><Link to="/booking" className="text-stone-400 hover:text-white text-sm transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest uppercase">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-stone-400 text-sm">
              <Mail size={16} className="text-stone-500" />
              <span>hello@dimitrag.com</span>
            </li>
            <li className="flex items-center space-x-3 text-stone-400 text-sm">
              <Phone size={16} className="text-stone-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3 text-stone-400 text-sm">
              <MapPin size={16} className="text-stone-500" />
              <span>Greater Sydney & On-Location</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest uppercase">Newsletter</h4>
          <p className="text-stone-400 text-sm mb-4">Subscribe for beauty tips and exclusive bridal offers.</p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-stone-800 border border-stone-700 px-4 py-2 text-sm focus:outline-none focus:border-stone-500 transition-colors"
            />
            <button className="btn-luxury !bg-nude-100 !text-stone-900 !py-2">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-stone-800 flex flex-col md:row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-stone-500">
        <p>© 2026 Dimitra Gerontzos. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
