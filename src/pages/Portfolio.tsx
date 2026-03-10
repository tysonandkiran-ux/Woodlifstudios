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
            src="https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&q=80&w=2000" 
            alt="Portfolio Hero" 
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
            Our Work
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-display text-white font-serif"
          >
            The <span className="italic">Collection</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.3em] transition-all duration-300 relative pb-2 ${
                filter === cat ? 'text-ochre' : 'text-luxury-black/40 hover:text-luxury-black'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-ochre"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-64 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[16/11] overflow-hidden mb-8 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-[0.4em] border border-white/40 px-8 py-3 backdrop-blur-sm">View Project</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-ochre mb-2">{project.category}</p>
                      <h3 className="text-3xl font-serif text-luxury-black">{project.title}</h3>
                    </div>
                    <p className="text-xs text-luxury-black/40 uppercase tracking-widest">{project.location}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-luxury-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative z-10 bg-beige max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-luxury-black hover:text-ochre transition-colors z-20"
              >
                <X size={32} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[400px] lg:h-auto">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12 md:p-20">
                  <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">{selectedProject.category}</p>
                  <h2 className="text-5xl font-serif text-luxury-black mb-8">{selectedProject.title}</h2>
                  <div className="grid grid-cols-2 gap-8 mb-12 border-y border-luxury-black/10 py-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-luxury-black/40 mb-1">Location</p>
                      <p className="text-sm font-medium text-luxury-black">{selectedProject.location}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-luxury-black/40 mb-1">Year</p>
                      <p className="text-sm font-medium text-luxury-black">2024</p>
                    </div>
                  </div>
                  <p className="text-lg text-luxury-black/70 leading-relaxed mb-12 font-light">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-12">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-luxury-black mb-6 border-b border-luxury-black/10 pb-2">Materials Used</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.materials.map(m => (
                        <span key={m} className="px-4 py-2 bg-carafe/5 text-[10px] uppercase tracking-widest text-luxury-black/70">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline">View Full Case Study</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
