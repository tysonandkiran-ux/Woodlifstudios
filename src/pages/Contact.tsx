import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading, Button } from '../components/UI';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Architecture',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a toast or a custom modal
    console.log('Form submitted:', formState);
  };

  return (
    <div className="bg-light-beige min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-ashy-black">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ashy-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.5em] text-white/60 mb-8"
          >
            Connect
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="text-display text-white font-serif leading-tight"
          >
            Start a <span className="font-display italic font-light">Conversation</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-40">
          {/* Info */}
          <div className="lg:col-span-5 space-y-32">
            <div>
              <SectionHeading 
                subtitle="Inquiries" 
                title="Studio Details" 
              />
              <div className="space-y-16 mt-20">
                <div className="flex items-start group">
                  <div className="w-20 h-20 border border-ashy-black/10 flex items-center justify-center text-medium-brown mr-10 shrink-0 group-hover:bg-ashy-black group-hover:text-white transition-all duration-700 shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 mb-3 font-semibold">Call Us</h4>
                    <p className="text-3xl font-serif text-ashy-black">+91 98486 38886</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-20 h-20 border border-ashy-black/10 flex items-center justify-center text-medium-brown mr-10 shrink-0 group-hover:bg-ashy-black group-hover:text-white transition-all duration-700 shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 mb-3 font-semibold">Email Us</h4>
                    <p className="text-3xl font-serif text-ashy-black">info@woodlifestudios.in</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-20 h-20 border border-ashy-black/10 flex items-center justify-center text-medium-brown mr-10 shrink-0 group-hover:bg-ashy-black group-hover:text-white transition-all duration-700 shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 mb-3 font-semibold">Visit Studio</h4>
                    <p className="text-3xl font-serif text-ashy-black leading-relaxed">12/1, H.No 3-6, Plot No 3, Vivekananda Nagar, Kukatpally, Hyderabad - 500072. Telangana, India.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-light-beige/5 relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map" 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-12 py-6 shadow-2xl flex items-center border border-ashy-black/5">
                  <MapPin size={24} className="text-medium-brown mr-6" />
                  <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-ashy-black">Woodlife Studios</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-16 md:p-32 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-ashy-black/5">
              <h3 className="text-5xl font-serif mb-20 leading-tight text-ashy-black">Book Your Design Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 font-semibold">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-ashy-black/10 py-6 outline-none focus:border-medium-brown transition-colors text-xl font-light text-ashy-black"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-ashy-black/10 py-6 outline-none focus:border-medium-brown transition-colors text-xl font-light text-ashy-black"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 font-semibold">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-ashy-black/10 py-6 outline-none focus:border-medium-brown transition-colors text-xl font-light text-ashy-black"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 font-semibold">Service Interested In</label>
                    <select 
                      className="w-full bg-transparent border-b border-ashy-black/10 py-6 outline-none focus:border-medium-brown transition-colors text-xl font-light appearance-none text-ashy-black"
                      value={formState.service}
                      onChange={e => setFormState({...formState, service: e.target.value})}
                    >
                      <option>Architecture</option>
                      <option>Interior Design</option>
                      <option>Renovation</option>
                      <option>Home Automation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 font-semibold">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-ashy-black/10 py-6 outline-none focus:border-medium-brown transition-colors text-xl font-light resize-none text-ashy-black"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <div className="pt-16">
                  <Button className="w-full py-8 text-xs" variant="primary">Send Inquiry</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
