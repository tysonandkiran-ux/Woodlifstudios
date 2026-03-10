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
    <div className="bg-beige min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.4em] text-white/80 mb-6"
          >
            Connect
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-display text-white font-serif"
          >
            Start a <span className="italic">Conversation</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-64 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">
          {/* Info */}
          <div className="lg:col-span-5 space-y-24">
            <div>
              <SectionHeading 
                subtitle="Inquiries" 
                title="Studio Details" 
              />
              <div className="space-y-12 mt-16">
                <div className="flex items-start group">
                  <div className="w-16 h-16 border border-luxury-black/10 flex items-center justify-center text-ochre mr-8 shrink-0 group-hover:bg-luxury-black group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40 mb-2">Call Us</h4>
                    <p className="text-2xl font-serif text-luxury-black">+91 98486 38886</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 border border-luxury-black/10 flex items-center justify-center text-ochre mr-8 shrink-0 group-hover:bg-luxury-black group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40 mb-2">Email Us</h4>
                    <p className="text-2xl font-serif text-luxury-black">info@woodlifestudios.in</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 border border-luxury-black/10 flex items-center justify-center text-ochre mr-8 shrink-0 group-hover:bg-luxury-black group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40 mb-2">Visit Studio</h4>
                    <p className="text-2xl font-serif text-luxury-black">12/1, H.No 3-6, Plot No 3, Vivekananda Nagar, Kukatpally, Hyderabad - 500072. Telangana, India.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-carafe/5 relative overflow-hidden group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-10 py-5 shadow-2xl flex items-center">
                  <MapPin size={20} className="text-ochre mr-4" />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-black">Woodlife Studios</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-12 md:p-24 shadow-2xl border border-luxury-black/5">
              <h3 className="text-4xl font-serif mb-16 leading-tight text-luxury-black">Book Your Design Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-ochre transition-colors text-lg font-light text-luxury-black"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-ochre transition-colors text-lg font-light text-luxury-black"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-ochre transition-colors text-lg font-light text-luxury-black"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40">Service Interested In</label>
                    <select 
                      className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-ochre transition-colors text-lg font-light appearance-none text-luxury-black"
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

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-black/40">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-ochre transition-colors text-lg font-light resize-none text-luxury-black"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <div className="pt-12">
                  <Button className="w-full py-6 text-sm" variant="primary">Send Inquiry</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
