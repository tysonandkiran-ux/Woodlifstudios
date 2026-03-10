import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/UI';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Art of Minimalist Living',
      excerpt: 'Discover how to create a sanctuary of peace in your home through minimalist design principles.',
      date: 'March 15, 2026',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 2,
      title: 'Sustainable Materials in Modern Architecture',
      excerpt: 'Exploring the beauty and durability of eco-friendly materials in contemporary home design.',
      date: 'February 28, 2026',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 3,
      title: 'The Power of Natural Light',
      excerpt: 'How architectural lighting can transform your living space and enhance your well-being.',
      date: 'February 10, 2026',
      image: 'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="pt-48 pb-40 bg-light-beige">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <SectionHeading 
          title="Design Insights" 
          subtitle="Our latest thoughts on architecture, interiors, and the art of living well."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-32">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-10 shadow-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ashy-black/20 group-hover:bg-ashy-black/0 transition-colors duration-1000" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-medium-brown mb-4 font-semibold">{post.date}</p>
              <h3 className="text-3xl font-serif text-ashy-black mb-6 group-hover:text-medium-brown transition-colors duration-700 leading-tight">{post.title}</h3>
              <p className="text-lg text-ashy-black/70 leading-relaxed mb-8 font-light">{post.excerpt}</p>
              <button className="text-[10px] uppercase tracking-[0.4em] border-b border-medium-brown/30 pb-2 hover:text-medium-brown hover:border-medium-brown transition-all duration-500 font-bold">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
