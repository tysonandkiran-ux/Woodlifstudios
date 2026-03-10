import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Process } from './pages/Process';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'services':
        return <Services setActivePage={setActivePage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'process':
        return <Process setActivePage={setActivePage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
