import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '@/constants';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'bridal' | 'glam' | 'natural' | 'hair'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'glam', name: 'Glam' },
    { id: 'natural', name: 'Natural' },
    { id: 'hair', name: 'Hair Styling' },
  ];

  const filteredItems = filter === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Gallery</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">The Portfolio</h1>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as any)}
                  className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 pb-2 border-b-2 ${
                    filter === cat.id ? 'border-gold-500 text-stone-900' : 'border-transparent text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
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
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-gold-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Full size preview" 
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
