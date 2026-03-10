import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';
import { SectionHeading, Button } from '../components/UI';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
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
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Process Hero" 
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
            The Journey
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-display text-white font-serif"
          >
            Our <span className="italic">Process</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-2xl text-luxury-black/70 max-w-4xl font-light leading-relaxed">
            We believe that the process is as important as the result. Our structured approach ensures clarity, precision, and excellence at every stage of your project.
          </p>
        </div>
      </section>

      <section className="pb-64 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-48">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-4">
                    <span className="text-8xl font-serif text-ochre/20">{step.number}</span>
                    <div className="h-[1px] flex-grow bg-luxury-black/10" />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-4xl font-serif text-luxury-black leading-tight">{step.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-xl text-luxury-black/60 leading-relaxed mb-12 font-light">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="group">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">Key Focus</h4>
                      <p className="text-sm text-luxury-black/70 font-light leading-relaxed">Meticulous attention to detail and alignment with your lifestyle goals, ensuring every element serves a purpose.</p>
                    </div>
                    <div className="group">
                      <h4 className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">Deliverable</h4>
                      <p className="text-sm text-luxury-black/70 font-light leading-relaxed">Comprehensive documentation and visual clarity for the next phase, providing a solid foundation for execution.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-64 px-6 md:px-12 bg-luxury-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="Efficiency" 
            title="Project Timeline" 
            align="center"
            light
          />
          <div className="relative mt-32">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { label: 'Initial Meeting', time: 'Week 1-2' },
                { label: 'Design Phase', time: 'Week 3-6' },
                { label: 'Construction', time: 'Week 8-24' },
                { label: 'Styling & Handover', time: 'Week 25-28' }
              ].map((milestone, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-luxury-black/50 backdrop-blur-sm p-12 border border-white/10 hover:border-ochre/50 transition-colors duration-500"
                >
                  <div className="w-3 h-3 rounded-full bg-ochre mx-auto mb-10 hidden lg:block shadow-[0_0_15px_rgba(216,155,61,0.5)]" />
                  <h4 className="text-2xl font-serif mb-4">{milestone.label}</h4>
                  <p className="text-ochre text-xs uppercase tracking-[0.3em]">{milestone.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-64 px-6 md:px-12 bg-beige text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display font-serif mb-12"
          >
            Ready to <span className="italic">Start</span>?
          </motion.h2>
          <p className="text-xl text-luxury-black/70 mb-16 font-light leading-relaxed">
            Your dream space is just a conversation away. Let's begin the journey together and create something extraordinary.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => setActivePage('contact')} variant="primary">Book Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
