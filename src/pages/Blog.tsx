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
    <div className="pt-32 pb-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Design Insights" 
          subtitle="Our latest thoughts on architecture, interiors, and the art of living well."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {posts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gold mb-3">{post.date}</p>
              <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">{post.excerpt}</p>
              <button className="text-xs uppercase tracking-widest border-b border-gold pb-1 hover:text-gold transition-colors">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
