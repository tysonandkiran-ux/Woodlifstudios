import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';
import { SectionHeading, Button } from '../components/UI';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
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
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Process Hero" 
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
            The Journey
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="text-display text-white font-serif leading-tight"
          >
            Our <span className="font-display italic font-light">Process</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-3xl text-ashy-black/70 max-w-5xl font-light leading-relaxed">
            We believe that the process is as important as the result. Our structured approach ensures clarity, precision, and excellence at every stage of your project.
          </p>
        </div>
      </section>

      <section className="pb-80 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-64">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 1.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start group"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-6">
                    <span className="text-9xl font-display text-medium-brown/10 group-hover:text-medium-brown/20 transition-colors duration-1000 leading-none">{step.number}</span>
                    <div className="h-[1px] flex-grow bg-ashy-black/5" />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-5xl font-serif text-ashy-black leading-tight group-hover:text-medium-brown transition-colors duration-700">{step.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-2xl text-ashy-black/60 leading-relaxed mb-16 font-light">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 gap-12">
                    <div className="group/item">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-medium-brown mb-6 font-semibold">Key Focus</h4>
                      <p className="text-base text-ashy-black/70 font-light leading-relaxed">Meticulous attention to detail and alignment with your lifestyle goals, ensuring every element serves a purpose.</p>
                    </div>
                    <div className="group/item">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-medium-brown mb-6 font-semibold">Deliverable</h4>
                      <p className="text-base text-ashy-black/70 font-light leading-relaxed">Comprehensive documentation and visual clarity for the next phase, providing a solid foundation for execution.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-80 px-8 md:px-16 bg-ashy-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Efficiency" 
            title="Project Timeline" 
            align="center"
            light
          />
          <div className="relative mt-48">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative z-10">
              {[
                { label: 'Initial Meeting', time: 'Week 1-2' },
                { label: 'Design Phase', time: 'Week 3-6' },
                { label: 'Construction', time: 'Week 8-24' },
                { label: 'Styling & Handover', time: 'Week 25-28' }
              ].map((milestone, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.25, duration: 1.2 }}
                  className="bg-ashy-black/40 backdrop-blur-md p-16 border border-white/5 hover:border-medium-brown/30 transition-all duration-1000 shadow-2xl"
                >
                  <div className="w-4 h-4 rounded-full bg-medium-brown mx-auto mb-12 hidden lg:block shadow-[0_0_20px_rgba(128,98,72,0.6)]" />
                  <h4 className="text-3xl font-serif mb-6">{milestone.label}</h4>
                  <p className="text-medium-brown text-[10px] uppercase tracking-[0.4em] font-semibold">{milestone.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-80 px-8 md:px-16 bg-light-beige text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display font-serif mb-16 leading-tight"
          >
            Ready to <span className="font-display italic font-light">Start</span>?
          </motion.h2>
          <p className="text-2xl text-ashy-black/70 mb-20 font-light leading-relaxed max-w-3xl mx-auto">
            Your dream space is just a conversation away. Let's begin the journey together and create something extraordinary.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => setActivePage('contact')} variant="primary" className="px-20">Book Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
