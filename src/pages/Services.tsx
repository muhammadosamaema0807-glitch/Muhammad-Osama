import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Our Offerings</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Bespoke Beauty Services</h1>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              From the most intimate weddings to high-fashion editorials, we provide a range of luxury services designed to make you feel extraordinary.
            </p>
          </div>

          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -z-10 top-10 left-10 w-full h-full bg-nude-200" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-2 block">{service.category}</span>
                    <h2 className="text-4xl font-serif mb-4">{service.title}</h2>
                    <p className="text-stone-500 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-center space-x-3 text-sm text-stone-600">
                        <Check size={16} className="text-gold-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-nude-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Investment</p>
                      <p className="text-xl font-serif text-stone-900">{service.price}</p>
                      <p className="text-[10px] text-stone-400 uppercase tracking-tighter">Duration: {service.duration}</p>
                    </div>
                    <Link to="/booking" className="btn-luxury">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Process Section */}
      <section className="section-padding bg-nude-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">The Experience</h2>
            <p className="text-stone-500">What to expect when booking with Dimitra Gerontzos</p>
          </div>

          <div className="space-y-12">
            {[
              { step: '01', title: 'Consultation', desc: 'We begin with a detailed discussion about your vision, outfit, and event style to create a look that is uniquely yours.' },
              { step: '02', title: 'Preparation', desc: 'Using luxury skincare, we prep your skin to ensure a flawless, long-lasting base that glows from within.' },
              { step: '03', title: 'Application', desc: 'Expert application using professional techniques and premium products tailored to your features.' },
              { step: '04', title: 'Final Touch', desc: 'A final reveal and touch-up kit provided to keep you looking perfect throughout your event.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-8">
                <span className="text-4xl font-serif text-nude-300">{item.step}</span>
                <div>
                  <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
