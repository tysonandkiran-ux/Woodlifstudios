import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { SectionHeading, Button } from '../components/UI';

export const Services: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
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
            src="https://images.squarespace-cdn.com/content/v1/67a4dd0d4c95e23ddefbfc32/a85ddca3-065b-4938-bada-c70a3378eb72/Barriedale_08.jpg?format=2500w" 
            alt="Interior Design" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/30" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.4em] text-white/80 mb-6"
          >
            Capabilities
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-display text-white font-serif"
          >
            Our <span className="italic">Services</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-2xl text-luxury-black/70 max-w-4xl font-light leading-relaxed">
            From initial architectural concepts to the final interior styling, we provide a comprehensive suite of services designed to deliver a seamless and luxurious experience.
          </p>
        </div>
      </section>

      <div className="space-y-64 mb-64">
        {SERVICES.map((service, index) => (
          <section key={service.id} className="px-6 md:px-12">
            <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center`}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="text-ochre mb-10">{service.icon}</div>
                <h3 className="text-5xl font-serif mb-8 leading-tight">{service.title}</h3>
                <p className="text-xl text-luxury-black/70 leading-relaxed mb-12 font-light">
                  {service.description}
                </p>
                <div className="space-y-6 mb-16">
                  {['Bespoke Solutions', 'Premium Materials', 'Expert Execution'].map((item, i) => (
                    <div key={i} className="flex items-center text-xs uppercase tracking-[0.3em] text-luxury-black/60">
                      <span className="w-2 h-2 bg-ochre mr-6" /> {item}
                    </div>
                  ))}
                </div>
                <Button onClick={() => setActivePage('contact')} variant="outline">Inquire Now</Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} aspect-[16/10] overflow-hidden shadow-2xl`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-64 px-6 md:px-12 bg-luxury-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display font-serif mb-12"
          >
            Need a <span className="italic">Custom</span> Solution?
          </motion.h2>
          <p className="text-xl text-white/50 mb-16 font-light leading-relaxed">
            Every project is unique. We offer tailored design packages to suit your specific requirements and aspirations.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => setActivePage('contact')} variant="primary">Discuss Your Project</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
