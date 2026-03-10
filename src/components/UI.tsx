import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-10 py-5 text-[10px] uppercase tracking-ultra font-medium transition-all duration-700 relative overflow-hidden group flex items-center justify-center";
  
  const variants = {
    primary: "bg-ochre text-luxury-black hover:bg-white",
    secondary: "bg-walnut text-white hover:bg-ochre",
    outline: "border border-luxury-black/10 text-luxury-black hover:border-luxury-black hover:bg-luxury-black hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center">
        {children}
        <ArrowRight className="ml-3 w-3 h-3 transition-transform duration-500 group-hover:translate-x-2" />
      </span>
    </motion.button>
  );
};

export const SectionHeading: React.FC<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}> = ({ title, subtitle, align = 'left', light = false }) => {
  return (
    <div className={`mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-[9px] uppercase tracking-ultra mb-6 block ${light ? 'text-white/50' : 'text-ochre'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className={`text-heading-lg font-serif ${light ? 'text-white' : 'text-luxury-black'}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};
