import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading, Button } from '../components/UI';

export const About: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="bg-beige min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            alt="Architectural Detail" 
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
            The Studio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-display text-white font-serif"
          >
            Our <span className="italic">Philosophy</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-64 px-6 md:px-12 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6">
              <SectionHeading 
                subtitle="Heritage" 
                title="Crafting Spaces That Inspire" 
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-luxury-black/70 leading-relaxed space-y-8 font-light"
              >
                <p>
                  Founded on the principles of architectural integrity and natural inspiration, Woodlife Studios has emerged as a leading name in premium interior design and architecture. Our journey began with a simple vision: to create spaces that are not just lived in, but experienced.
                </p>
                <p>
                  We believe that every structure has a soul, and every interior tells a story. Our team of dedicated architects and designers work tirelessly to ensure that every detail, from the grand architectural sweep to the smallest walnut finish, is executed with perfection.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-[3/4] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Architectural Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Split Layout */}
      <section className="py-0 px-6 md:px-12 bg-luxury-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="py-32 lg:pr-24 border-b lg:border-b-0 lg:border-r border-white/10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-ochre text-xs uppercase tracking-[0.3em] mb-8 block"
            >
              01 / Vision
            </motion.span>
            <h3 className="text-5xl font-serif mb-10 leading-tight">To be the global benchmark for luxury architectural design.</h3>
            <p className="text-xl text-white/50 leading-relaxed font-light">
              Where nature and modernity coexist in perfect harmony. We strive to redefine the boundaries of bespoke living through innovation and timeless aesthetics.
            </p>
          </div>
          <div className="py-32 lg:pl-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-ochre text-xs uppercase tracking-[0.3em] mb-8 block"
            >
              02 / Mission
            </motion.span>
            <h3 className="text-5xl font-serif mb-10 leading-tight">To deliver unparalleled design excellence.</h3>
            <p className="text-xl text-white/50 leading-relaxed font-light">
              Through meticulous craftsmanship, innovative planning, and a deep understanding of our clients' aspirations. We build more than homes; we build legacies.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy - Grid */}
      <section className="py-64 px-6 md:px-12 bg-beige">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="The Language" 
            title="Design Principles" 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-24">
            {[
              { title: 'Nature-Inspired', desc: 'Integrating organic elements and natural light to create breathing spaces that connect with the environment.' },
              { title: 'Architectural Precision', desc: 'Rigorous planning and structural integrity in every design, ensuring longevity and functional beauty.' },
              { title: 'Bespoke Craftsmanship', desc: 'Custom solutions and hand-selected walnut materials for unique results that reflect individual character.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="w-12 h-[1px] bg-ochre mb-8 group-hover:w-24 transition-all duration-500" />
                <h4 className="text-3xl font-serif mb-6">{item.title}</h4>
                <p className="text-lg text-luxury-black/60 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise - Large Image Section */}
      <section className="py-64 px-6 md:px-12 bg-carafe/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img 
                src="https://images.squarespace-cdn.com/content/v1/67a4dd0d4c95e23ddefbfc32/90081804-6972-42a0-98f9-d10afc36b12f/Nadia+Arkhipova_08.jpg?format=2500w" 
                alt="Expertise" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-luxury-black p-12 hidden md:flex flex-col justify-center">
              <span className="text-ochre text-5xl font-serif mb-2">10+</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Years of Excellence</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              subtitle="Expertise" 
              title="A Decade of Design Mastery" 
            />
            <div className="space-y-10 text-xl text-luxury-black/70 font-light leading-relaxed">
              <p>With over 10 years of experience in the luxury segment, our studio has completed over 200 projects across India and internationally. Our expertise spans from high-end residential villas to sophisticated commercial spaces.</p>
              <ul className="space-y-6">
                {['Award-winning Design Team', 'Global Material Sourcing', 'Advanced 3D Visualization', 'Seamless Project Management'].map((point, i) => (
                  <li key={i} className="flex items-center text-sm uppercase tracking-[0.3em] text-luxury-black">
                    <span className="w-2 h-2 bg-ochre mr-6" /> {point}
                  </li>
                ))}
              </ul>
              <div className="pt-12">
                <Button onClick={() => setActivePage('contact')}>Work With Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
