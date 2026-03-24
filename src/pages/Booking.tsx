import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Send } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center section-padding">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white p-12 text-center shadow-xl border border-nude-200"
        >
          <div className="w-20 h-20 bg-nude-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Send className="text-gold-500" size={32} />
          </div>
          <h2 className="text-4xl font-serif mb-4">Request Received</h2>
          <p className="text-stone-500 mb-8">
            Thank you for reaching out. Dimitra will personally review your request and get back to you within 24-48 hours to confirm availability.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-luxury-outline"
          >
            Back to Website
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-gold-500 mb-4 block">Reservations</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Book Your Experience</h1>
            <p className="text-stone-500 mb-12 leading-relaxed">
              Please fill out the form below with your event details. For bridal bookings, we recommend inquiring at least 6-12 months in advance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-stone-900" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Limited Availability</h4>
                  <p className="text-stone-500 text-sm">We only accept 4 bridal bookings per month to ensure premium attention to detail.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-stone-900" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Service Area</h4>
                  <p className="text-stone-500 text-sm">Based in Sydney, available for travel worldwide for destination weddings.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nude-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-stone-900" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Response Time</h4>
                  <p className="text-stone-500 text-sm">All inquiries are answered within 2 business days.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border border-nude-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Full Name</label>
                  <input required type="text" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Email Address</label>
                  <input required type="email" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Phone Number</label>
                  <input required type="tel" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Event Type</label>
                  <select className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent">
                    <option>Bridal</option>
                    <option>Special Occasion</option>
                    <option>Editorial / Commercial</option>
                    <option>Trial / Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Event Date</label>
                  <input required type="date" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Location / Venue</label>
                  <input required type="text" className="w-full border-b border-nude-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">Additional Message</label>
                <textarea rows={4} className="w-full border border-nude-300 p-4 focus:outline-none focus:border-stone-900 transition-colors resize-none"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn-luxury w-full">
                  Confirm Booking Request
                </button>
              </div>
              
              <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest italic">
                * This is a request form, not a confirmed booking.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
