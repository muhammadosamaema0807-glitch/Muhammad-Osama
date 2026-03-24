import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="input_file_0.png" 
                alt="Dimitra Gerontzos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-nude-200 -z-10 hidden lg:block" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-8">Meet Dimitra</h1>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                With a passion for beauty that began in the heart of the fashion industry, Dimitra Gerontzos has spent over a decade perfecting the art of luxury makeup and hair styling.
              </p>
              <p>
                Her philosophy is simple: beauty is not about transformation, but about elevation. She believes in creating looks that feel authentic, timeless, and effortlessly elegant, ensuring every bride and client feels like the most confident version of themselves.
              </p>
              <p>
                Certified by world-renowned academies and having worked with top-tier bridal designers and fashion houses, Dimitra brings a level of professionalism and artistry that is rare in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-3xl font-serif text-stone-900">10+</h4>
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-stone-900">500+</h4>
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Happy Brides</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">The Beauty Philosophy</h2>
            <div className="w-24 h-px bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart size={32} />, title: 'Authenticity', desc: 'We focus on enhancing your natural features rather than masking them. Your look should reflect your true self.' },
              { icon: <Award size={32} />, title: 'Excellence', desc: 'Only the finest luxury products and professional techniques are used to ensure a flawless, long-lasting finish.' },
              { icon: <Star size={32} />, title: 'Experience', desc: 'From the first consultation to the final touch-up, we provide a calm, premium, and personalized experience.' }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center space-y-6"
              >
                <div className="text-gold-500 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-12 block">Trusted & Certified</span>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['MAC PRO', 'CHARLOTTE TILBURY', 'BOBBI BROWN', 'MAKEUP FOREVER'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-serif tracking-[0.2em]">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
