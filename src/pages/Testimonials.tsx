import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/constants';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Kind Words</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Client Love</h1>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Read what our lovely brides and clients have to say about their experience with Dimitra Gerontzos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 shadow-lg border border-nude-200 relative"
              >
                <Quote className="text-nude-200 absolute top-6 right-6" size={40} />
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-serif text-xl">{testimonial.name}</h4>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video or Image Testimonial */}
      <section className="section-padding bg-nude-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden">
            <img 
              src="input_file_1.png" 
              alt="Happy Bride" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif italic">"Dimitra is more than just a makeup artist; she is a calming presence on what can be a stressful day. Her talent is undeniable, but her heart is what truly makes her special."</h2>
            <div>
              <h4 className="font-serif text-2xl">Natalie S.</h4>
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400">Destination Bride, Italy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
