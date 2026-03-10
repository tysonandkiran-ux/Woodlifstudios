import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-ashy-black/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer"
          onClick={() => setActivePage('home')}
        >
          <span className="text-2xl md:text-3xl font-display text-white tracking-tight">
            Woodlife <span className="italic text-medium-brown">Studios</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group ${
                activePage === link.id ? 'text-medium-brown' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-medium-brown transition-all duration-300 group-hover:w-full ${activePage === link.id ? 'w-full' : ''}`} />
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="ml-4 px-6 py-2 border border-medium-brown text-[10px] uppercase tracking-widest font-medium bg-medium-brown text-ashy-black hover:bg-white hover:text-ashy-black transition-all duration-300"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ashy-black shadow-xl md:hidden py-10 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-serif font-medium text-left ${
                  activePage === link.id ? 'text-medium-brown' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  return (
    <footer className="bg-ashy-black text-white/80 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 cursor-pointer" onClick={() => setActivePage('home')}>
            <span className="text-3xl font-display text-white tracking-tight">
              Woodlife <span className="italic text-medium-brown">Studios</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8 max-w-xs">
            Inspired by nature, crafted for modern living. We create timeless architectural and interior masterpieces.
          </p>
          <div className="flex space-x-4">
            {['Instagram', 'Pinterest', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-widest hover:text-medium-brown transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-6">Studio</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setActivePage('about')} className="hover:text-medium-brown transition-colors">About Us</button></li>
            <li><button onClick={() => setActivePage('portfolio')} className="hover:text-medium-brown transition-colors">Portfolio</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-medium-brown transition-colors">Services</button></li>
            <li><button onClick={() => setActivePage('blog')} className="hover:text-medium-brown transition-colors">Blog</button></li>
            <li><button onClick={() => setActivePage('process')} className="hover:text-medium-brown transition-colors">Our Process</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-6">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>12/1, H.No 3-6, Plot No 3</li>
            <li>Vivekananda Nagar, Kukatpally</li>
            <li>Hyderabad - 500072. Telangana, India.</li>
            <li>+91 98486 38886</li>
            <li>info@woodlifestudios.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-6">Newsletter</h4>
          <p className="text-xs mb-4">Subscribe to receive our latest design insights.</p>
          <div className="flex border-b border-white/20 pb-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
            <button className="text-medium-brown"><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center text-[10px] uppercase tracking-[0.2em]">
        <p>© 2026 Woodlife Studios. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-medium-brown">Privacy Policy</a>
          <a href="#" className="hover:text-medium-brown">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
