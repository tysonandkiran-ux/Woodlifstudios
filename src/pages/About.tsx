import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading, Button } from '../components/UI';

export const About: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="bg-light-beige min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-ashy-black">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            alt="Architectural Detail" 
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
            The Studio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="text-display text-white font-serif leading-tight"
          >
            Our <span className="font-display italic font-light">Philosophy</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6">
              <SectionHeading 
                subtitle="Heritage" 
                title="Crafting Spaces That Inspire" 
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl text-ashy-black/70 leading-relaxed space-y-12 font-light"
              >
                <p>
                  Founded on the principles of architectural integrity and natural inspiration, Woodlife Studios has emerged as a leading name in premium interior design and architecture. Our journey began with a simple vision: to create spaces that are not just lived in, but experienced.
                </p>
                <p className="text-lg text-ashy-black/50 leading-loose">
                  We believe that every structure has a soul, and every interior tells a story. Our team of dedicated architects and designers work tirelessly to ensure that every detail, from the grand architectural sweep to the smallest walnut finish, is executed with perfection.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="aspect-[3/4.5] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Architectural Interior" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[3s]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Split Layout */}
      <section className="py-0 px-8 md:px-16 bg-warm-taupe text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="py-40 lg:pr-32 border-b lg:border-b-0 lg:border-r border-white/10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-medium-brown text-[10px] uppercase tracking-[0.4em] mb-10 block font-semibold"
            >
              01 / Vision
            </motion.span>
            <h3 className="text-5xl font-serif mb-12 leading-[1.1]">To be the global benchmark for luxury architectural design.</h3>
            <p className="text-xl text-white/50 leading-relaxed font-light">
              Where nature and modernity coexist in perfect harmony. We strive to redefine the boundaries of bespoke living through innovation and timeless aesthetics.
            </p>
          </div>
          <div className="py-40 lg:pl-32">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-medium-brown text-[10px] uppercase tracking-[0.4em] mb-10 block font-semibold"
            >
              02 / Mission
            </motion.span>
            <h3 className="text-5xl font-serif mb-12 leading-[1.1]">To deliver unparalleled design excellence.</h3>
            <p className="text-xl text-white/50 leading-relaxed font-light">
              Through meticulous craftsmanship, innovative planning, and a deep understanding of our clients' aspirations. We build more than homes; we build legacies.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy - Grid */}
      <section className="py-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="The Language" 
            title="Design Principles" 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mt-32">
            {[
              { title: 'Nature-Inspired', desc: 'Integrating organic elements and natural light to create breathing spaces that connect with the environment.' },
              { title: 'Architectural Precision', desc: 'Rigorous planning and structural integrity in every design, ensuring longevity and functional beauty.' },
              { title: 'Bespoke Craftsmanship', desc: 'Custom solutions and hand-selected walnut materials for unique results that reflect individual character.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1.2 }}
                className="group"
              >
                <div className="w-12 h-[1px] bg-medium-brown mb-10 group-hover:w-24 transition-all duration-700" />
                <h4 className="text-3xl font-serif mb-8 group-hover:text-medium-brown transition-colors duration-500">{item.title}</h4>
                <p className="text-lg text-ashy-black/60 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise - Large Image Section */}
      <section className="py-80 px-8 md:px-16 bg-light-beige/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="aspect-[3/4.5] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.squarespace-cdn.com/content/v1/67a4dd0d4c95e23ddefbfc32/90081804-6972-42a0-98f9-d10afc36b12f/Nadia+Arkhipova_08.jpg?format=2500w" 
                alt="Expertise" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[3s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-ashy-black p-12 hidden md:flex flex-col justify-center shadow-2xl">
              <span className="text-medium-brown text-6xl font-display mb-3">10+</span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em]">Years of Excellence</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              subtitle="Expertise" 
              title="A Decade of Design Mastery" 
            />
            <div className="space-y-12 text-2xl text-ashy-black/70 font-light leading-relaxed">
              <p>With over 10 years of experience in the luxury segment, our studio has completed over 200 projects across India and internationally. Our expertise spans from high-end residential villas to sophisticated commercial spaces.</p>
              <ul className="space-y-8">
                {['Award-winning Design Team', 'Global Material Sourcing', 'Advanced 3D Visualization', 'Seamless Project Management'].map((point, i) => (
                  <li key={i} className="flex items-center text-[11px] uppercase tracking-[0.4em] text-ashy-black font-semibold">
                    <span className="w-2 h-2 bg-medium-brown mr-8" /> {point}
                  </li>
                ))}
              </ul>
              <div className="pt-16">
                <Button onClick={() => setActivePage('contact')} className="px-16">Work With Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
