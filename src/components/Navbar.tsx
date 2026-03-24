import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4',
        scrolled ? 'bg-nude-50/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-serif tracking-[0.3em] uppercase">Dimitra Gerontzos</span>
          <span className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase text-stone-500 -mt-1">Makeup & Hair Artistry</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn-luxury !px-6 !py-2">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-nude-100 shadow-xl lg:hidden border-t border-nude-200"
          >
            <div className="flex flex-col p-8 space-y-6 items-center">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="nav-link text-sm">
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="btn-luxury w-full text-center">
                Book Now
              </Link>
              <div className="flex space-x-6 pt-4">
                <a href="#" className="text-stone-500 hover:text-stone-900"><Instagram size={20} /></a>
                <a href="#" className="text-stone-500 hover:text-stone-900"><Phone size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
