import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { SectionHeading } from '../components/UI';
import { MapPin, X } from 'lucide-react';
import { Button } from '../components/UI';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

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
            src="https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&q=80&w=2000" 
            alt="Portfolio Hero" 
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
            Our Work
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="text-display text-white font-serif leading-tight"
          >
            The <span className="font-display italic font-light">Collection</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter */}
      <section className="py-32 px-8 md:px-16 bg-light-beige">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-500 relative pb-3 font-semibold ${
                filter === cat ? 'text-medium-brown' : 'text-ashy-black/30 hover:text-ashy-black'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-medium-brown"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-80 px-8 md:px-16 bg-light-beige">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[16/10] overflow-hidden mb-10 relative shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ashy-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white text-[10px] uppercase tracking-[0.5em] border border-white/30 px-10 py-4 backdrop-blur-md hover:bg-white hover:text-ashy-black transition-colors duration-500">View Project</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end px-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-medium-brown mb-3 font-semibold">{project.category}</p>
                      <h3 className="text-4xl font-serif text-ashy-black group-hover:text-medium-brown transition-colors duration-700">{project.title}</h3>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/30 font-semibold">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-16"
          >
            <div className="absolute inset-0 bg-ashy-black/98 backdrop-blur-2xl" onClick={() => setSelectedProject(null)} />
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
              className="relative z-10 bg-light-beige max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-[0_50px_150px_-30px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-10 right-10 text-ashy-black hover:text-medium-brown transition-all duration-500 z-20 hover:rotate-90"
              >
                <X size={40} strokeWidth={1} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[500px] lg:h-auto overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-16 md:p-24 flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.5em] text-medium-brown mb-6 font-semibold">{selectedProject.category}</p>
                  <h2 className="text-6xl font-serif text-ashy-black mb-10 leading-tight">{selectedProject.title}</h2>
                  <div className="grid grid-cols-2 gap-12 mb-16 border-y border-ashy-black/10 py-10">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 mb-3 font-semibold">Location</p>
                      <p className="text-xl font-serif text-ashy-black">{selectedProject.location}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-ashy-black/40 mb-3 font-semibold">Year</p>
                      <p className="text-xl font-serif text-ashy-black">2024</p>
                    </div>
                  </div>
                  <p className="text-2xl text-ashy-black/70 leading-relaxed mb-16 font-light">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-16">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-ashy-black mb-8 border-b border-ashy-black/10 pb-4 font-semibold">Materials Used</h4>
                    <div className="flex flex-wrap gap-6">
                      {selectedProject.materials.map(m => (
                        <span key={m} className="px-6 py-3 bg-ashy-black/5 text-[10px] uppercase tracking-[0.3em] text-ashy-black/70 font-semibold">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-fit px-16">View Full Case Study</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
