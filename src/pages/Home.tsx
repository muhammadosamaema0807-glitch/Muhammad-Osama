import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, TESTIMONIALS, PORTFOLIO } from '@/constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="input_file_1.png" 
            alt="Luxury Bridal Makeup" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Bridal & Special Occasion Beauty Expert
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight"
          >
            Luxury Makeup & Hair <br /> 
            <span className="italic">by Dimitra Gerontzos</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/booking" className="btn-luxury !bg-white !text-stone-900 hover:!bg-nude-100">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-nude-100 py-16 px-6 border-y border-nude-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-xs tracking-widest uppercase font-medium text-stone-500">Trusted by 500+ Brides & Clients</p>
          </div>
          <div className="h-px w-20 bg-nude-300 hidden md:block" />
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Vogue Weddings', 'Harper\'s Bazaar', 'Brides Magazine'].map((mag) => (
              <span key={mag} className="text-sm font-serif italic text-stone-400 tracking-widest">{mag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Beauty Experiences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                <Link to="/services" className="text-[10px] tracking-[0.3em] uppercase font-bold flex items-center group-hover:text-gold-500 transition-colors">
                  Learn More <ArrowRight size={12} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-nude-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif">The Art of Transformation</h2>
            </div>
            <Link to="/portfolio" className="btn-luxury-outline">
              View Full Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO.slice(0, 6).map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase mb-2 block">{item.category}</span>
                    <h4 className="text-xl font-serif">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dimitra */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="input_file_0.png" 
                alt="Dimitra at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nude-200 -z-10 hidden lg:block" />
          </div>
          
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Elevating Your Natural Beauty</h2>
            <p className="text-stone-500 mb-10 leading-relaxed">
              With over a decade of experience in the luxury beauty industry, Dimitra brings a refined editorial eye to every client. We believe makeup should enhance, not mask, your unique features.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Professional Experience', desc: '10+ years specializing in high-end bridal and fashion.' },
                { title: 'Premium Products', desc: 'Exclusively using luxury brands like Chanel, Dior, and Charlotte Tilbury.' },
                { title: 'Personalized Looks', desc: 'Every application is tailored to your skin type, features, and vision.' },
                { title: 'On-Location Availability', desc: 'We bring the studio experience to your home, hotel, or venue.' }
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4">
                  <CheckCircle2 className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-stone-900">{benefit.title}</h4>
                    <p className="text-stone-500 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-nude-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-8 block">Kind Words</span>
          <div className="relative">
            <span className="text-9xl font-serif text-nude-300 absolute -top-10 left-0 -z-10">"</span>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-stone-700">
                {TESTIMONIALS[0].content}
              </p>
              <div>
                <h4 className="font-serif text-xl">{TESTIMONIALS[0].name}</h4>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400">{TESTIMONIALS[0].role}</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-12">
            <Link to="/testimonials" className="text-[10px] tracking-[0.3em] uppercase font-bold hover:text-gold-500 transition-colors inline-flex items-center">
              Read More Reviews <ArrowRight size={12} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Secure Your Date Now</h2>
          <p className="text-stone-400 mb-12 text-lg">
            Limited availability for 2026 bridal bookings. Contact us today to ensure your date is reserved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking" className="btn-luxury !bg-nude-100 !text-stone-900">
              Book Appointment
            </Link>
            <Link to="/contact" className="btn-luxury-outline !border-white !text-white hover:!bg-white hover:!text-stone-900">
              Inquire Now
            </Link>
          </div>
          <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-stone-500 italic">
            * Limited to 4 bridal bookings per month for premium quality
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
