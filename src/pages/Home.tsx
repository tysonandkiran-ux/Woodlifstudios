import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, PROJECTS, PROCESS_STEPS, TESTIMONIALS } from '../constants';
import { Button, SectionHeading } from '../components/UI';
import { ArrowRight, MapPin } from 'lucide-react';

export const Home: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="overflow-hidden bg-light-beige">
      {/* 1. Hero Section - Cinematic */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ashy-black">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400" 
            alt="Cinematic Architecture" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ashy-black/60 via-transparent to-ashy-black/90" />
        </motion.div>
        
        <div className="relative z-10 max-w-[100rem] mx-auto px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] mb-16 block opacity-50 font-medium">
              Architectural Integrity & Bespoke Design
            </span>
            <h1 className="text-display font-serif mb-20 leading-[1.05] tracking-tight">
              Crafting <span className="font-display italic font-light">Timeless</span> <br /> 
              Architectural Legacies
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-24">
              <Button onClick={() => setActivePage('contact')} variant="secondary" className="px-16">Start Your Journey</Button>
              <button 
                onClick={() => setActivePage('portfolio')}
                className="text-[10px] uppercase tracking-[0.5em] text-white/60 hover:text-white transition-all duration-700 flex items-center group"
              >
                View Collection <ArrowRight className="ml-6 w-4 h-4 transition-transform group-hover:translate-x-3" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute bottom-16 left-16 hidden md:flex items-center gap-8"
        >
          <div className="w-16 h-[1px] bg-white/20" />
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/30">Scroll to explore</span>
        </motion.div>
      </section>

      {/* 2. Introduction Section - Vertical Image & Editorial Text */}
      <section className="py-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-40 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4.5] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200" 
                alt="Vertical Architectural Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2.5s]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-ashy-black p-10 hidden xl:flex flex-col justify-center">
              <span className="text-medium-brown text-5xl font-display mb-3">01</span>
              <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">The Studio</span>
            </div>
          </motion.div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-medium-brown mb-10 block font-semibold">
                Woodlife Studios
              </span>
              <h2 className="text-heading-lg font-serif text-ashy-black mb-16 leading-[1.1]">
                Where Nature Meets <br /> <span className="font-display italic font-light">Architectural</span> Precision
              </h2>
              <div className="space-y-12">
                <p className="text-2xl text-ashy-black/80 leading-relaxed font-light max-w-xl">
                  We are a premium interior architecture studio dedicated to the art of living well. Our philosophy is rooted in the seamless integration of organic materials and modern structural integrity.
                </p>
                <p className="text-lg text-ashy-black/50 leading-loose font-light max-w-lg">
                  From the initial sketch to the final styling, we curate every detail to reflect your unique narrative, ensuring that every space we craft is a timeless legacy of design excellence.
                </p>
              </div>
              <div className="mt-20">
                <Button onClick={() => setActivePage('about')} variant="outline" className="px-12">Our Story</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Grid */}
      <section className="py-80 px-8 md:px-16 bg-ashy-black text-white">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-16">
            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.5em] text-medium-brown mb-10 block font-semibold">
                Expertise
              </span>
              <h2 className="text-heading-lg font-serif leading-[1.1]">
                Comprehensive <br /> <span className="font-display italic font-light">Design</span> Solutions
              </h2>
            </div>
            <p className="text-white/30 text-base font-light max-w-sm leading-relaxed mb-6">
              A holistic approach to architecture and interiors, ensuring a seamless journey from concept to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 1.2 }}
                className="group bg-ashy-black p-20 hover:bg-medium-brown/5 transition-all duration-1000 flex flex-col h-full border border-transparent hover:border-white/10"
              >
                <div className="text-medium-brown mb-16 opacity-30 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif mb-10 text-white group-hover:text-medium-brown transition-colors duration-700">{service.title}</h3>
                <p className="text-base text-white/30 leading-relaxed mb-20 font-light flex-grow">
                  {service.description}
                </p>
                <button 
                  onClick={() => setActivePage('services')}
                  className="text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-medium-brown flex items-center transition-all duration-700"
                >
                  Learn More <ArrowRight size={14} className="ml-6 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-6 group-hover:translate-x-0" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects / Portfolio */}
      <section className="py-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-48 gap-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-medium-brown mb-10 block font-semibold">
                Portfolio
              </span>
              <h2 className="text-heading-lg font-serif text-ashy-black leading-[1.1]">
                Selected <span className="font-display italic font-light">Works</span>
              </h2>
            </div>
            <button 
              onClick={() => setActivePage('portfolio')}
              className="text-[11px] uppercase tracking-[0.5em] text-ashy-black/50 hover:text-medium-brown transition-colors flex items-center group mb-6"
            >
              View Full Collection <ArrowRight size={18} className="ml-6 transition-transform group-hover:translate-x-3" />
            </button>
          </div>

          <div className="space-y-64">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-center group cursor-pointer`}
                onClick={() => setActivePage('portfolio')}
              >
                <div className={`lg:col-span-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/9] overflow-hidden shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ashy-black/5 group-hover:bg-ashy-black/20 transition-all duration-1000" />
                  </div>
                </div>
                <div className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
                  <span className="text-[10px] uppercase tracking-[0.5em] text-medium-brown mb-8 block font-medium">{project.category}</span>
                  <h3 className="text-5xl font-serif text-ashy-black mb-10 group-hover:text-medium-brown transition-colors duration-1000 leading-tight">{project.title}</h3>
                  <p className="text-lg text-ashy-black/50 leading-relaxed mb-12 font-light">
                    {project.description}
                  </p>
                  <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                    <MapPin size={16} className="text-medium-brown" />
                    <span className="text-[11px] uppercase tracking-[0.3em] text-ashy-black/30">{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Design Process Section */}
      <section className="py-80 px-8 md:px-16 bg-ashy-black text-white overflow-hidden">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-64">
            <span className="text-[11px] uppercase tracking-[0.6em] text-medium-brown mb-10 block font-semibold">
              Methodology
            </span>
            <h2 className="text-heading-lg font-serif leading-[1.1]">
              The <span className="font-display italic font-light">Journey</span> to Excellence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-40">
            {PROCESS_STEPS.slice(0, 4).map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.25, duration: 1.2 }}
                className="relative group"
              >
                <span className="text-[140px] font-display text-white/5 absolute -top-28 -left-10 group-hover:text-medium-brown/10 transition-colors duration-1000 leading-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h4 className="text-3xl font-serif mb-10 group-hover:text-medium-brown transition-colors duration-700">{step.title}</h4>
                  <p className="text-base text-white/30 leading-relaxed font-light max-w-[280px]">
                    {step.description}
                  </p>
                  <div className="w-10 h-[1px] bg-medium-brown mt-16 group-hover:w-20 transition-all duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-64 text-center">
            <button 
              onClick={() => setActivePage('process')}
              className="text-[11px] uppercase tracking-[0.5em] text-white/30 hover:text-medium-brown transition-all duration-700"
            >
              Explore Full Process
            </button>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-40 items-center">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.5em] text-medium-brown mb-10 block font-semibold">
                Voices
              </span>
              <h2 className="text-heading-lg font-serif text-ashy-black leading-[1.1] mb-16">
                Client <br /> <span className="font-display italic font-light">Experiences</span>
              </h2>
              <p className="text-lg text-ashy-black/50 font-light leading-relaxed max-w-sm">
                We pride ourselves on the relationships we build. Every testimonial is a testament to our commitment to excellence.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3, duration: 1.2 }}
                  className="bg-white p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-ashy-black/5 hover:shadow-2xl transition-all duration-1000"
                >
                  <div className="flex items-center mb-16">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mr-8 grayscale" />
                    <div>
                      <h5 className="font-serif text-2xl text-ashy-black">{t.name}</h5>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-medium-brown mt-2">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-serif italic text-ashy-black/70 leading-relaxed">
                    "{t.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Call-to-Action */}
      <section className="relative py-96 px-8 md:px-16 bg-ashy-black text-white text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
          className="absolute inset-0 opacity-25"
        >
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2400" 
            alt="Final CTA Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-display font-serif mb-20 leading-[1.1]">
              Let's Create Your <br /> <span className="font-display italic font-light">Masterpiece</span>
            </h2>
            <p className="text-2xl text-white/50 mb-24 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Your vision deserves the precision of architectural mastery. Connect with our studio to begin the transformation of your space.
            </p>
            <div className="flex flex-col md:row justify-center items-center gap-16">
              <Button onClick={() => setActivePage('contact')} variant="secondary" className="px-20 py-6 text-xs">Book a Consultation</Button>
              <button 
                onClick={() => setActivePage('portfolio')}
                className="text-[11px] uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all duration-700"
              >
                Explore Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
