import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { SectionHeading, Button } from '../components/UI';

export const Services: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
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
            src="https://images.squarespace-cdn.com/content/v1/67a4dd0d4c95e23ddefbfc32/a85ddca3-065b-4938-bada-c70a3378eb72/Barriedale_08.jpg?format=2500w" 
            alt="Interior Design" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ashy-black/30" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.5em] text-white/60 mb-8"
          >
            Capabilities
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="text-display text-white font-serif leading-tight"
          >
            Our <span className="font-display italic font-light">Services</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-3xl text-ashy-black/70 max-w-5xl font-light leading-relaxed">
            From initial architectural concepts to the final interior styling, we provide a comprehensive suite of services designed to deliver a seamless and luxurious experience.
          </p>
        </div>
      </section>

      <div className="space-y-80 mb-80">
        {SERVICES.map((service, index) => (
          <section key={service.id} className="px-8 md:px-16">
            <div className={`max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center`}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="text-medium-brown mb-12 scale-125 origin-left">{service.icon}</div>
                <h3 className="text-6xl font-serif mb-10 leading-tight text-ashy-black">{service.title}</h3>
                <p className="text-2xl text-ashy-black/70 leading-relaxed mb-16 font-light">
                  {service.description}
                </p>
                <div className="space-y-8 mb-20">
                  {['Bespoke Solutions', 'Premium Materials', 'Expert Execution'].map((item, i) => (
                    <div key={i} className="flex items-center text-[10px] uppercase tracking-[0.4em] text-ashy-black/50 font-semibold">
                      <span className="w-3 h-[1px] bg-medium-brown mr-8" /> {item}
                    </div>
                  ))}
                </div>
                <Button onClick={() => setActivePage('contact')} variant="outline" className="px-16">Inquire Now</Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} aspect-[16/10] overflow-hidden shadow-[0_50px_150px_-30px_rgba(0,0,0,0.15)] group`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-80 px-8 md:px-16 bg-ashy-black text-white text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display font-serif mb-16 leading-tight"
          >
            Need a <span className="font-display italic font-light">Custom</span> Solution?
          </motion.h2>
          <p className="text-2xl text-white/40 mb-20 font-light leading-relaxed max-w-3xl mx-auto">
            Every project is unique. We offer tailored design packages to suit your specific requirements and aspirations.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => setActivePage('contact')} variant="primary" className="px-20">Discuss Your Project</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
