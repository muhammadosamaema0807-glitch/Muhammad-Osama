import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Contact Us</h1>
            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to discuss a custom project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-serif mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-nude-100 flex items-center justify-center rounded-full text-stone-900">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-stone-400">Email</p>
                      <p className="text-stone-900">hello@dimitrag.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-nude-100 flex items-center justify-center rounded-full text-stone-900">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-stone-400">Phone</p>
                      <p className="text-stone-900">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-nude-100 flex items-center justify-center rounded-full text-stone-900">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-stone-400">Location</p>
                      <p className="text-stone-900">Sydney, Australia & Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-stone-900 text-white flex items-center justify-center rounded-full hover:bg-gold-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-stone-900 text-white flex items-center justify-center rounded-full hover:bg-gold-500 transition-colors">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-nude-100 p-12 text-center border border-nude-200 h-full flex flex-col items-center justify-center"
                >
                  <Send className="text-gold-500 mb-6" size={48} />
                  <h3 className="text-3xl font-serif mb-4">Message Sent</h3>
                  <p className="text-stone-500 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-luxury-outline">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-xl border border-nude-200 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Name</label>
                      <input required type="text" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Email</label>
                      <input required type="email" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Subject</label>
                    <input required type="text" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Message</label>
                    <textarea required rows={6} className="w-full border border-nude-300 p-4 focus:outline-none focus:border-stone-900 transition-colors resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-luxury w-full">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
