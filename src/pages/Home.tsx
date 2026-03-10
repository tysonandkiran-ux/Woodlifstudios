import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, PROJECTS, PROCESS_STEPS, TESTIMONIALS } from '../constants';
import { Button, SectionHeading } from '../components/UI';
import { ArrowRight, MapPin } from 'lucide-react';

export const Home: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="overflow-hidden bg-beige">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/40 backdrop-blur-[1px]" />
        </motion.div>
        
        <div className="relative z-10 max-w-[90rem] mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-ultra mb-10 block opacity-70"
          >
            Inspired by Nature
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="text-display font-serif mb-12"
          >
            Designing <br /> <span className="italic font-light">Timeless</span> Spaces
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-sm md:text-base font-light tracking-widest mb-16 max-w-xl mx-auto opacity-60 leading-relaxed"
          >
            Luxury interiors and architecture crafted for modern living. <br className="hidden md:block" />
            Where architectural precision meets bespoke walnut craftsmanship.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10"
          >
            <Button onClick={() => setActivePage('contact')} variant="secondary">Book Consultation</Button>
            <Button onClick={() => setActivePage('portfolio')} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-forest">View Portfolio</Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[8px] uppercase tracking-ultra text-white/40 mb-4">Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-64 px-6 md:px-12 bg-beige">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-20 -right-20 w-80 h-[450px] hidden xl:block border-[20px] border-beige overflow-hidden shadow-2xl"
            >
               <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
                alt="Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          
          <div className="lg:pl-20">
            <SectionHeading 
              subtitle="The Studio" 
              title="A Legacy of Architectural Excellence" 
            />
            <p className="text-xl text-luxury-black/80 leading-relaxed mb-12 font-light">
              Woodlife Studios is a premium interior design and architecture studio dedicated to creating elegant, functional, and inspiring spaces. We combine thoughtful design, refined walnut textures, and innovative planning to craft homes that reflect our clients’ lifestyles.
            </p>
            <p className="text-base text-luxury-black/50 mb-16 leading-loose font-light max-w-lg">
              Our philosophy is rooted in the belief that great design should be both beautiful and purposeful. Every project we undertake is a unique journey, where we blend our expertise with your vision to create something truly extraordinary.
            </p>
            <Button onClick={() => setActivePage('about')} variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-64 px-6 md:px-12 bg-luxury-black">
        <div className="max-w-[90rem] mx-auto">
          <SectionHeading 
            subtitle="Our Expertise" 
            title="Comprehensive Design Solutions" 
            align="center"
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group bg-carafe/20 p-12 hover:bg-carafe/40 transition-all duration-700 border border-white/5"
              >
                <div className="text-ochre mb-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif mb-6 text-white">{service.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-12 font-light">
                  {service.description}
                </p>
                <button 
                  onClick={() => setActivePage('services')}
                  className="text-[9px] uppercase tracking-ultra text-ochre flex items-center group-hover:gap-3 transition-all duration-500"
                >
                  Explore <ArrowRight size={14} className="ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-64 px-6 md:px-12 bg-beige">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <SectionHeading 
              subtitle="Portfolio" 
              title="Selected Works" 
            />
            <button 
              onClick={() => setActivePage('portfolio')}
              className="mb-24 text-[10px] uppercase tracking-ultra text-luxury-black hover:text-ochre transition-colors flex items-center"
            >
              View All Projects <ArrowRight size={16} className="ml-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {PROJECTS.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="group cursor-pointer"
                onClick={() => setActivePage('portfolio')}
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-luxury-black/10 group-hover:bg-luxury-black/30 transition-all duration-700" />
                  <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                    <div className="flex items-center text-[9px] uppercase tracking-ultra mb-2">
                      <MapPin size={12} className="mr-2" /> {project.location}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] uppercase tracking-ultra text-ochre mb-3 block">{project.category}</span>
                    <h3 className="text-3xl font-serif text-luxury-black group-hover:text-ochre transition-colors duration-500">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-64 px-6 md:px-12 bg-luxury-black text-white">
        <div className="max-w-[90rem] mx-auto">
          <SectionHeading 
            subtitle="Our Methodology" 
            title="How Woodlife Studios Works" 
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-16">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative group"
              >
                <span className="text-8xl font-serif text-white/5 absolute -top-16 -left-6 group-hover:text-ochre/10 transition-colors duration-700">{step.number}</span>
                <h4 className="text-2xl font-serif mb-6 relative z-10 group-hover:text-ochre transition-colors duration-500">{step.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-64 px-6 md:px-12 bg-beige">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="lg:pr-20">
            <SectionHeading 
              subtitle="The Woodlife Advantage" 
              title="Why Choose Us" 
            />
            <div className="space-y-12">
              {[
                { title: 'Experienced Design Team', desc: 'A collective of award-winning architects and designers with global exposure.' },
                { title: 'Bespoke Interior Concepts', desc: 'Tailored designs that reflect your unique personality and modern lifestyle.' },
                { title: 'Premium Material Selection', desc: 'Sourcing the finest walnut and natural materials for unmatched quality.' },
                { title: 'End-to-End Management', desc: 'Seamless project execution from concept to completion with zero stress.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="flex items-start group"
                >
                  <div className="w-16 h-16 bg-carafe/5 flex items-center justify-center text-ochre mr-8 shrink-0 group-hover:bg-ochre group-hover:text-white transition-all duration-500">
                    <ArrowRight size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-2 group-hover:text-ochre transition-colors duration-500">{item.title}</h4>
                    <p className="text-sm text-luxury-black/50 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[800px] overflow-hidden"
          >
            <img 
              src="https://rg-prd-a2fcb4ad.b-cdn.net/8f314188-a99c-49ee-a96b-440523099b59/Kanai2_92_RGB_V1.jpg?crop=6976%2C4640%2C0%2C269&quality=75&width=2000" 
              alt="Luxury Living" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-64 px-6 md:px-12 bg-carafe/5">
        <div className="max-w-[90rem] mx-auto">
          <SectionHeading 
            subtitle="Client Stories" 
            title="What Our Clients Say" 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="bg-white p-16 shadow-sm border border-luxury-black/5 hover:shadow-xl transition-all duration-700"
              >
                <p className="text-2xl font-serif italic mb-12 text-luxury-black/70 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mr-6 grayscale hover:grayscale-0 transition-all duration-500" />
                  <div>
                    <h5 className="font-serif text-xl">{t.name}</h5>
                    <p className="text-[9px] uppercase tracking-ultra text-ochre">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-64 px-6 md:px-12 bg-luxury-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-display font-serif mb-12"
          >
            Let's Create Your <br /> <span className="italic">Dream</span> Space
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl text-white/50 mb-16 font-light tracking-wide"
          >
            Ready to embark on your architectural journey? Our team is here to bring your vision to life with precision and elegance.
          </motion.p>
          <div className="flex justify-center">
            <Button onClick={() => setActivePage('contact')} variant="primary">Book Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
